---
sidebar_position: 4
---

# Security and Permissions

## Security Overview

Taskana is based on JAAS. Its security features start from the REST service.

Due to authentication requirements an additional wrapper is necessary to run the REST service. 

Its main purpose (besides starting the REST service as e.g. a web-container) is to implement server-side security. Worst case: The client side authorization does not work. The unauthorized user will only see the UI without any data.

We provide an example (taskana-rest-spring-example) which is using basicauth.

Taskana relies on its client to set up a JAAS context whose Subject is used to retrieve the UserPrincipal and 0-n GroupPrincipals. The Ids of these principals form the list of 'accessIds' that are used to grant/deny access to workbaskets. The accessIds are retrieved at runtime by class CurrentUserContext of module taskana-core.

In a production environment, it is the responsibility of taskana's client to establish the correct JAAS context.

In the rest-spring-example, the JAAS context is established with the help of Spring in classes WebSecurityConfig / SampleLoginModule / SampleRoleGranter of project taskana-rest-spring-base

In taskana-rest-spring-example-wildfly, class ElytronToJaasFilter is used to set up a JAAS subject from Elytron security.

## Security Roles in TASKANA

Taskana distinguishes between five different roles:

    USER
    The USER role grants access to Taskana. USER is everybody who gets assigned to and completes tasks. 
    TASK_ADMIN
    The TASK_ADMIN role includes all permissions on tasks with the exception of deleting a task/tasks. It can also READ all workbaskets in case to create/transfer tasks in/to them.
    BUSINESS_ADMINISTRATOR
    The BUSINESS_ADMINISTRATOR role allows to change the business configuration (workbaskets, classifications, ...)
    ADMINISTRATOR
    The ADMINISTRATOR role includes all permissions on the system.
    MONITOR
    The MONITOR role grants access to all monitoring operations and to the monitoring UI.


Since Taskana is based on JAAS, it provides a basic role mapping for Principals to roles. This is configured in the TaskanaEngineConfiguration. You can assign a list of Principal names to each role. Taskana will check if one of the user principals is contained in the required role.

## Access to Workbaskets
Authorization is bound to Workbaskets via WorkbasketAccessList, a DB table that contains so-called workbasketAccessItems. Each workbasketAccessItem contains permissions for a specific workbasket, a specific access id and the actions 'READ', 'OPEN', 'APPEND', 'TRANSFER', 'DISTRIBUTE' and CUSTOM_1 through CUSTOM_12. 

| Permission            | Meaning                                                                                                                                                                                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| READ                  | Read or query Workbasket metadata and its containing Tasks.   If a user does not have the READ permission, he does not even know about the existence of the Workbasket.  If a user does not have the READ permission, he can’t see the Tasks within that Workbasket.  |
| OPEN                  | The user is allowed to explicitly query the Tasks of specific Workbaskets. If a user does not have the OPEN permission, he can’t query/filter Tasks by Workbaskets.                                                                                                   |
| APPEND                | The  user is allowed to append a Task to the Workbasket. This applies to  creation of Tasks in this Workbasket as well as for transferring Tasks  to this Workbasket.                                                                                                 |
| TRANSFER              | Allows the user to transfer Tasks from this Workbasket to another one.                                                                                                                                                                                                |
| DISTRIBUTE            | The  user is allowed to distribute Tasks from this Workbasket to the  configured distribution targets. For distribution the APPEND and  TRANSFER permissions are checked also.                                                                                        |
| CUSTOM_1 .. CUSTOM_12 | Permissions to be used in custom code to configure application specific scenarios which are not directly checked by TASKANA.                                                                                                                                          |

### Example WorkbasketAccesItem table

A sample extract of the table might look like the following:

| ID   | WB_ID | ,ACCESS_ID | ACCESS_NAME       | READ, | OPN,        | APPD, | TRSFR, | DISTR, | C1,    | ..,           | C12) |
|------|------------------|-------------|---------|-------|-------------|-------|--------|--------|--------|---------------|------|
| WA01 | WB01             | teamlead_1 | Dominik |  true | false  | true     | true  | true  | true,...false |      |
| WA02 | WB01             | teamlead_2 | Holger  |  true       | true | false | false | true  | true,...true; |      |
| WA03 | WB01             | group_1   | Schaden |  true       | true | false | true | false | true,...true; |      |

If the access rights of a specific JAAS Subject for a specific workbasket are to be determined, all workbasket access items for this workbasket and each involved access id are retrieved. For example, if the subject contains accessIds 'teamlead_2' and 'group_1', and the requested workbasket is WB01, the following records are involved:


| ID   | WB_ID | ACCESS_ID, | ACCESS_NAME | READ, | OPN, | APPD, | TRSFR, | DISTR, | C1, | ..,    | C12) |        |
|------|------|-------------|------------------|--------|--------|-----|--------|--------|-------------------|---|-------|
| WA02 | WB01 | teamlead_2 | Holger           | true  | true  | false    | false | false | true | true,...true; |               |
| WA03 | WB01 | group_1    | Schaden          | true  | true  | false    | false | true  | false | true,...true; |

In each column, the algorithm checks whether at least one 'true' is contained and if this is the case, the corresponding access right is granted. If all records in a specific column contain value 'false', the access right is denied. In the current case, access right 'APPEND' would be denied, all other rights are granted.

## securityEnabled-flag

It is only possible to set the securityEnabled-flag in the TaskanaEngineConfiguration constructor to false if the corresponding ENFORCE_SECURITY flag from the CONFIGURATION table in the database is also set to false. Otherwise the TASKANA start-up process will be stopped.

If no value is set in the database then it is assumed that this is the first TaskanaEngine connecting to the database which then sets it's securityEnabled-flag as a new default.

```
TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,
        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)
```