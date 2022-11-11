---
sidebar_position: 1
---

# General Configuration

The configuration of the Taskana Java library is in the file ```taskana.properties``` in the resources folder of the client. 

> Note: You can change the name of the properties file when calling TaskanaEngineConfiguration via constructor. To change it, specify the *propertiesFileName* parameter. 
> You can change the default separator in lists in the properties file as well. Use the *propertiesSeparator* parameter for it. If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.


Following parameters can be adjusted in ```taskana.properties```:

## Basic Parameters

| Parameter                                      | Description                                                                                                                                                                                                                                                                                                                                                             | Sample Value                         |
|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| taskana.domains                                | A list of  domains, separated by comma                                                                                                                                                                                                                                                                                                                      | DOMAIN_C, DOMAIN_TEST                 |
| taskana.classification.types                   | The comma separated list of classification types (case insensitive)                                                                                                                                                                                                                                                                                                                        | TASK, document                    |
| taskana.classification.categories.<type\> (for example taskana.classification.categories.document)             | The comma separated list of classification categories for each type                                                                                                                                                                                                                                                                                                                   | EXTERNAL, manual, autoMAtic, Process |
| taskana.user.minimalPermissionsToAssignDomains | The  list of minimal Workbasket permissions of a user needed to belong to  the domain. Needed to determine the domains of a user, which are  aggregated in the getUser() method of the UserService. Values have to match the Enum values of WorkbasketPermission. If this property is not defined the dynamic computation of the domain attribute will not be executed. | READ, OPEN                           |
| taskana.addAdditionalUserInfo                  | Add attributes of the user from the USER_INFO table, for example during a Task request or Task Query, the default value is false                                                                                                                                                                                                                                                           | true
| taskana.validation.allowTimestampWithServiceLevelMismatch | allows user to create Tasks with date-attributes independant of the serviceLevel                                                                                                                                                                                                                                                                              | true

## Roles Mapping

For each role, a list of access ids that refer to users or groups can be specified using following keywords:

| Role           | Keyword                     |
|----------------|-----------------------------|
| user           | taskana.roles.user          |
| business_admin | taskana.roles.businessadmin |
| task_admin     | taskana.roles.taskadmin     |
| admin          | taskana.roles.admin         |
| monitor        | taskana.roles.monitor       |
| task_router    | taskana.roles.taskrouter    |

The access ids are separated by |. The assignment of roles to users or groups can look like this:
```
askana.roles.user=cn=ksc-users,cn=groups,OU=Test,O=TASKANA | teamlead-1 | teamlead-2 | user-1-1 | user-1-2 | user-2-1 | user-2-2 | user-b-1 | user-b-2
taskana.roles.admin=admin | uid=admin,cn=users,OU=Test,O=TASKANA
taskana.roles.businessadmin=businessadmin | cn=business-admins,cn=groups,OU=Test,O=TASKANA
taskana.roles.monitor=monitor | cn=monitor-users,cn=groups,OU=Test,O=TASKANA
taskana.roles.taskadmin=taskadmin
```

## Holidays

Holidays can customized for the correct computation of duration in workdays. 

- ``taskana.german.holidays.enabled=true``: Standard German holidays will be enabled.
- ``taskana.german.holidays.corpus-christi.enabled``: The holiday corpus christi will be activated.  
- ``taskana.custom.holidays``: Specific holidays dates will be added. Specify each holiday in the dd.MM format. You can separate holidays by |. 
        Example custom holidays: ```taskana.custom.holidays=31.07|16.12```
        

## History

- ``taskana.history.deletion.on.task.deletion.enabled``: After deletion of a Task, all history events related to that Task will also be deleted.
- ``` taskana.historylogger.name```: The name of the logger that writes to the audit file
        example:
        ``` taskana.historylogger.name=AUDIT ```