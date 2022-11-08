---
sidebar_position: 4
---

# Security and Permissions

## Security Overview

Kadai Java library uses JAAS subjects for its authentication. Its security features can be used based on the REST service. The authentification cannot be run without the REST service. Client side authorization is required to view Tasks and Workbaskets or to make any changes. If the client side authorization does not work, the unauthorized user will not be able to use Kadai properly.

We provide an example (taskana-rest-spring-example) which is using ldap. You can build a simpler step-by-step example in our [Getting Started](../getting-started/spring-boot-example.md) as well.

Kadai Java library needs its client to provide a mapping to the Jaas Subject used for users and groups. The client should create a JAAS context for the Java library. The ids of users and groups, e. g. "user-1-1" or "admin", are then used for the internal logic in the Java library. Our REST Service already provides ldap support. When using REST Service with ldap, you need to provide ??? your ldap congiguration ???

## Security Roles in TASKANA

Users can have one of the six different roles:

- **USER**
    The USER role grants access to Taskana. USER is everybody who gets assigned to and completes tasks. 
- **TASK_ADMIN**
    The TASK_ADMIN role includes all permissions on tasks with the exception of deleting a task/tasks. It can also READ all workbaskets in case to create/transfer tasks in/to them.
- **BUSINESS_ADMINISTRATOR**
    The BUSINESS_ADMINISTRATOR role allows to change the business configuration (workbaskets, classifications, ...)
- **ADMINISTRATOR**
    The ADMINISTRATOR role includes all permissions on the system.
- **MONITOR**
    The MONITOR role grants access to all monitoring operations and to the monitoring UI.
- **TASK_ROUTER**
    The TASK_ROUTER role implies acess to creating Tasks in all Workbaskets without having READ permissions for them. This role is used for automateted scripts, not for persons.


 You can assigns roles to users or groups in the ```taskana.properties```file. Read more about ldap configuration [here](../configuration/taskana-properties/ldap-configuration.md)

## Access to Workbaskets

Kadai Java library uses WorkbasketAccessItems for authorization. WorkbasketAccessItems are stored in the WorkbasketAccessList database table. Each WorkbaketAccessItems contains values for each of the following permissions: *READ, OPEN, APPEND, TRANSFER, DISTRIBUTE and CUSTOM_1 through CUSTOM_12*. A WorkbasketAccessItem belong to a specific Workbasket-User or Workbasket-Group pair. The user or group are specified by their accessId (for example "user-1-1"). The different permissions have following meaning:

| Permission            | Meaning                                                                                                                                                                                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| READ                  | Read or query Workbasket metadata and its containing Tasks.   If a user does not have the READ permission, he does not even know about the existence of the Workbasket.  If a user does not have the READ permission, he can’t see the Tasks within that Workbasket.  |
| OPEN                  | The user is allowed to explicitly query the Tasks of specific Workbaskets. If a user does not have the OPEN permission, he can’t query/filter Tasks by Workbaskets.                                                                                                   |
| APPEND                | The  user is allowed to append a Task to the Workbasket. This applies to  creation of Tasks in this Workbasket as well as for transferring Tasks  to this Workbasket.                                                                                                 |
| TRANSFER              | Allows the user to transfer Tasks from this Workbasket to another one.                                                                                                                                                                                                |
| DISTRIBUTE            | The  user is allowed to distribute Tasks from this Workbasket to the  configured distribution targets. For distribution the APPEND and  TRANSFER permissions are checked also.                                                                                        |
| CUSTOM_1 .. CUSTOM_12 | Permissions to be used in custom code to configure application specific scenarios which are not directly checked by TASKANA.                                                                                                                                          |

### Example WorkbasketAccesList table

Example WorkbasketAccessItems:

| ID   | WB_ID | ,ACCESS_ID | ACCESS_NAME       | READ, | OPN,        | APPD, | TRSFR, | DISTR, | C1,    | ..,           | C12) |
|------|------------------|-------------|---------|-------|-------------|-------|--------|--------|--------|---------------|------|
| WA01 | WB01             | teamlead_1 | Dominik |  true | false  | true     | true  | true  | true,...false |      |
| WA02 | WB01             | teamlead_2 | Holger  |  true       | true | false | false | true  | true,...true; |      |
| WA03 | WB01             | group_1   | Schaden |  true       | true | false | true | false | true,...true; |      |

## securityEnabled-flag

It is only possible to set the securityEnabled-flag in the TaskanaEngineConfiguration constructor to false if the corresponding ENFORCE_SECURITY flag from the CONFIGURATION table in the database is also set to false. Otherwise the TASKANA start-up process will be stopped.

If no value is set in the database then it is assumed that this is the first TaskanaEngine connecting to the database which then sets it's securityEnabled-flag as a new default.

```
TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,
        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)
```