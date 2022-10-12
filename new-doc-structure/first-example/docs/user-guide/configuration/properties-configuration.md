---
sidebar_position: 1
---

# Configuration of TASKANA properties

Taskana is configured via a configuration file taskana.properties. This configuration file contains all parameters to control the behaviour of the taskana library.

## General Parameter

| Parameter                                      | Description                                                                                                                                                                                                                                                                                                                                                             | Sample Value                         |
|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| taskana.domains                                | The comma separated list of administrative domains                                                                                                                                                                                                                                                                                                                      | DOMAIN_A, DOMAIN_B                   |
| taskana.domains.default                        | The default domain to create new tasks in if no other domain is specified                                                                                                                                                                                                                                                                                               | DOMAIN_A                             |
| taskana.classification.types                   | The comma separated list of classification types                                                                                                                                                                                                                                                                                                                        | TASK, DOCUMENT                       |
| taskana.classification.categories              | The comma separated list of classification categories                                                                                                                                                                                                                                                                                                                   | EXTERNAL, MANUAL, AUTOMATIC, PROCESS |
| taskana.user.minimalPermissionsToAssignDomains | The  list of minimal Workbasket permissions of a user needed to belong to  the domain. Needed to determine the domains of a user, which are  aggregated in the getUser() method of the UserService. Values have to match the Enum values of WorkbasketPermission. If this property is not defined the dynamic computation of the domain attribute will not be executed. | READ, OPEN                           |

## Security Configuration

The properties file contains the specification of the lists of access ids (i.e. users or groups) that belong to the roles user, business_admin or admin.

The keywords to specify these roles are as follows:

| Role           | Keyword                     |
|----------------|-----------------------------|
| user           | taskana.roles.user          |
| business_admin | taskana.roles.businessadmin |
| task_admin     | taskana.roles.taskadmin     |
| admin          | taskana.roles.admin         |

Each entry may contain a list of access ids that are separated by the '|' character. Whitespace at the begin or end of each access id is ignored. This is, as sample config may look like
```
taskana.roles.user = group1 | group2
taskana.roles.admin= Holger  |  admingroup1| admingroup2|admingroup3 | uid=john.doe,ou=People,dc=example,dc=com
taskana.roles.businessadmin=busadmgrpa|busadmgrpb | busadmgrpc
taskana.roles.taskadmin=peter | taskadmin
```

By default, this configuration file has the name 'taskana.properties' and is searched in the classpath. In addition, the separator '|' is used. Both defaults can be changed by specifying the property filename and separator explicitly when creating the TaskanaEngineConfiguration via constructor.

```  TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,
        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)
```

If in this call, either propertiesFileName or propertiesSeparator is null, Taskana uses the default value.

If for example, you want Taskana to use the 'application.properties' file from the classpath, you should specify "/application.properties" as propertiesFileName.

You may also specify a fully qualified filename that addresses a file directly. In this case, that file is not searched on the classpath but loaded by its name.

Please note, that if you specify a non-default propertiesSeparator, the access ids must not contain any character that is contained in this propertiesSeparator.



If Taskana doesn't find a configuration file, it operates with empty roles.

## Holidays

By adding the property taskana.german.holidays.enabled to the taskana property file the german holidays can be activated. 
Additionnally the holiday corpus christi can be enabled using the following property: taskana.german.holidays.corpus-christi.enabled

## Holifdays Customization

By adding the property taskana.custom.holidays to the taskana property file custom holidays can be configured while the startup of taskana. The format of an Holiday is in the format of dd.MM where dd stand for day and MM stand for month. The single custom holidays have to be separated by either by the default separator | (pipe - like used with the roles above) like in the following example. Or the separator which is defined while instantiating TaskanaEngineConfiguration.
 
```
taskana.custom.holidays=31.07|16.12
```

## History deletion upon task deletion

By adding the property taskana.history.deletion.on.task.deletion.enabled to the taskana.properties file the history deletion upon task deletion can be activated. If activated all history events concerning the deleted task/s will also be deleted#



## History audit logger

By adding the property taskana.historylogger.name it is possible to configure the name of the logger which you want to use to write to your audit file. Furthermore you can configure the audit logger through a custom log4j.xml file.

example:
``` taskana.historylogger.name=AUDIT ```

## Validation of timestamps with a service level mismatch

The taskana.validation.allowTimestampWithServiceLevelMismatch allows the user to create tasks with timestamps that do not match i.e. exceed the service level of the classification. If the property is set to true, the planned and due timestamp of a Task can be set to points in time, which are further apart than the service level of the classification would normally allow.

 
## Additional User Info
If you are using the USER_INFO table you can add the Full/Long name when retrieveing Tasks/TaskComments/TaskHistoryEvents with the property taskana.addAdditionalUserInfo
