---
sidebar_position: 4
---

# Security and Permissions

## Security Overview

TASKANA Java library uses JAAS subjects for its authentication. Its security features can be used based on the REST service. The authentication cannot be run without the REST service. Client side authorization is required to view Tasks and Workbaskets or to make any changes. If the client side authorization does not work, the unauthorized user will not be able to use TASKANA properly.

We provide an example (taskana-rest-spring-example) which is using LDAP. You can build a simple step-by-step example with our [Getting Started](../getting-started/spring-boot-example.md) as well.

TASKANA Java library needs its client to provide a mapping to the JAAS Subject used for users and groups. The client should create a JAAS context for the Java library. The ids of users and groups, e.g. "user-1-1" or "admin", are then used for the internal logic in the Java library. Our REST Service already provides LDAP support. When using REST Service with LDAP, you need to provide ??? your LDAP configuration ???

## Security Roles in TASKANA

Users can have one of the six different roles:

- **USER**
    The USER role grants access to TASKANA. USER is everybody who gets assigned to and completes tasks. 
- **TASK_ADMIN**
    The TASK_ADMIN role includes all permissions on tasks with the exception of deleting a task/tasks. It can also READ all workbaskets in case to create/transfer tasks in/to them.
- **BUSINESS_ADMINISTRATOR**
    The BUSINESS_ADMINISTRATOR role allows to change the business configuration (workbaskets, classifications, ...)
- **ADMINISTRATOR**
    The ADMINISTRATOR role includes all permissions on the system.
- **MONITOR**
    The MONITOR role grants access to all monitoring operations and to the monitoring UI.
- **TASK_ROUTER**
    The TASK_ROUTER role implies access to creating Tasks in all Workbaskets without having READ permissions for them. This role is used for automated scripts, not for persons.


 You can assign roles to users or groups in the ```taskana.properties``` file. Read more about LDAP configuration [here](../configuration/taskana-properties/ldap-configuration.md)

## Access to Workbaskets

TASKANA Java library uses WorkbasketAccessItems for authorization. WorkbasketAccessItems are stored in the WorkbasketAccessList database table. Each WorkbasketAccessItems contains values for each of the following permissions: *READ, OPEN, APPEND, TRANSFER, DISTRIBUTE and CUSTOM_1 through CUSTOM_12*. A WorkbasketAccessItem belongs to a specific Workbasket-User or Workbasket-Group pair. The user or group are specified by their accessId (for example "user-1-1"). The different permissions have the following meaning:

| Permission            | Meaning                                                                                                                                                                                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| READ                  | Read or query Workbasket metadata and its containing Tasks.   If a user does not have the READ permission, he does not even know about the existence of the Workbasket.  If a user does not have the READ permission, he can’t see the Tasks within that Workbasket.  |
| OPEN                  | The user is allowed to explicitly query the Tasks of specific Workbaskets. If a user does not have the OPEN permission, he can’t query/filter Tasks by Workbaskets.                                                                                                   |
| APPEND                | The  user is allowed to append a Task to the Workbasket. This applies to  creation of Tasks in this Workbasket as well as for transferring Tasks  to this Workbasket.                                                                                                 |
| TRANSFER              | Allows the user to transfer Tasks from this Workbasket to another one.                                                                                                                                                                                                |
| DISTRIBUTE            | The  user is allowed to distribute Tasks from this Workbasket to the  configured distribution targets. For distribution the APPEND and  TRANSFER permissions are checked also.                                                                                        |
| CUSTOM_1 .. CUSTOM_12 | Permissions to be used in custom code to configure application specific scenarios which are not directly checked by TASKANA.                                                                                                                                          |

### Example WorkbasketAccessList table

Example WorkbasketAccessItems:

| ID   | WB_ID | ,ACCESS_ID | ACCESS_NAME       | READ, | OPN,        | APPD, | TRSFR, | DISTR, | C1,    | ..,           | C12) |
|------|------------------|-------------|---------|-------|-------------|-------|--------|--------|--------|---------------|------|
| WA01 | WB01             | teamlead_1 | Dominik |  true | false  | true     | true  | true  | true,...false |      |
| WA02 | WB01             | teamlead_2 | Holger  |  true       | true | false | false | true  | true,...true; |      |
| WA03 | WB01             | group_1   | Schaden |  true       | true | false | true | false | true,...true; |      |

## Disable security using the *securityEnabled* parameter

The securityEnabled-flag can disable authentification for the complete TASKANA functionality if set to false. The default value of the flag is true. You can change the value by specifying the *securityEnabled* parameter of the constructor of TaskanaEngineConfiguration. 
```
TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,
        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)
```
In the spring boot example, you can add following bean in order to disable security:

    @Bean
    public TaskanaEngineConfiguration taskanaEngineConfiguration(DataSource dataSource) {
        return new SpringTaskanaEngineConfiguration(dataSource, true, false, "TASKANA");
    }

The CONFIGURATION table has a ENFORCE_SECURITY field. If this field is already set, then *securityEnabled* should be set to the same value. If the ENFORCE_SECURITY flag in the database has no value, then the first TaskanaEngine connecting to the database sets its *securityEnabled* as the value of ENFORCE_SECURITY.

