---
sidebar_position: 2
---

# Security

## Users

The configuration of the user-related parameters is in the file ```taskana.properties```. Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the *propertiesSeparator* parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.

| Parameter                                      | Description                                                                                                                                                                                                                                                                                                                                                             | Sample Value                         |
|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
                                                                     | EXTERNAL \| manual \| autoMAtic \| Process |
| taskana.user.minimalPermissionsToAssignDomains | The  list of minimal Workbasket permissions of a user needed to belong to  the domain. Needed to determine the domains of a user, which are  aggregated in the getUser() method of the UserService. Values have to match the Enum values of WorkbasketPermission. If this property is not defined the dynamic computation of the domain attribute will not be executed. | READ \| OPEN                           |
| taskana.addAdditionalUserInfo                  | Add attributes of the user from the USER_INFO table, for example during a Task request or Task Query, the default value is false                                                                                                                                                                                                                                                           | true

### Roles Mapping

TASKANA Roles and their meaning can be looked up [here](../core-concepts/security-permissions#security-roles-in-taskana). For each role, a list of access ids that refer to users or groups can be specified using following keywords:

| Role           | Keyword                     |
|----------------|-----------------------------|
| user           | taskana.roles.user          |
| business_admin | taskana.roles.business_admin |
| task_admin     | taskana.roles.task_admin     |
| admin          | taskana.roles.admin         |
| monitor        | taskana.roles.monitor       |
| task_router    | taskana.roles.task_router    |

The access ids are separated by a configurable separator. If none is provided, the default is "|". The assignment of roles to users or groups can look like this:
```
taskana.roles.user=cn=ksc-users,cn=groups,OU=Test,O=TASKANA | teamlead-1 | teamlead-2 | user-1-1 | user-1-2 | user-2-1 | user-2-2 | user-b-1 | user-b-2
taskana.roles.admin=admin | uid=admin,cn=users,OU=Test,O=TASKANA
taskana.roles.business_admin=businessadmin | cn=business-admins,cn=groups,OU=Test,O=TASKANA
taskana.roles.monitor=monitor | cn=monitor-users,cn=groups,OU=Test,O=TASKANA
taskana.roles.task_admin=taskadmin
```

## REST Service Security

As described in [security](../core-concepts/security-permissions.md), taskana-core uses JAAS Subjects for authentication. However, when using the REST service of TASKANA, you need to provide a mapping to the JAAS Subjects. TASKANA shows how to do that in the class BootWebSecurityConfigurer in the ```taskana-rest-spring-example-boot``` module using LDAP. There, you can also lookup additional configuration of TASKANA on REST level. This way, TASKANA provides LDAP support for its REST Service. You can read more about LDAP Configuration [here](ldap-configuration.md). 

Following additional security parameters can be configured in the ```application.properties```:

|Parameter                        |Description                                              |Sample Value          |Optional|
|---------------------------------|---------------------------------------------------------|----------------------|--------|               
|devMode                          |When using frontend with devMode set to true and enablCsrf to false, you will be automatically logged in as admin. The default value is false.|false|true
|enableCsrf                |This property enables the support of CSRF tokens. This will not work together with devMode. You need to set it to false in order to use Basic Auth, for example in Postman.The default value is false.|true|true