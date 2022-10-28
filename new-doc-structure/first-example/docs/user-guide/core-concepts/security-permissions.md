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

## securityEnabled-flag

It is only possible to set the securityEnabled-flag in the TaskanaEngineConfiguration constructor to false if the corresponding ENFORCE_SECURITY flag from the CONFIGURATION table in the database is also set to false. Otherwise the TASKANA start-up process will be stopped.

If no value is set in the database then it is assumed that this is the first TaskanaEngine connecting to the database which then sets it's securityEnabled-flag as a new default.

```
TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,
        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)
```

Authorization is bound to Workbaskets via WorkbasketAccessList, a DB table that contains so-called workbasketAccessItems. Each workbasketAccessItem contains permissions for a specific workbasket, a specific access id and the actions 'READ', 'OPEN', 'APPEND', 'TRANSFER', 'DISTRIBUTE' and CUSTOM_1 through CUSTOM_12. See 

 for details of these permissions.

## Example

A sample extract of the table might look like the following:

ID      WB_ID,ACCESS_ID,     ACCESS_NAME   , READ, OPN, APPD, TRSFR, DISTR, C1, .., C12)
------+------+------------+-------------------+-----+-----+------+-------+------+-------
WA01 WB01 'teamlead_1', ' Dominik'              , true,false,   true ,   true,     true,     true,...false
WA02 WB01 'teamlead_2', ' Holger '               , true, true,   false,   false,    true,      true,...true;
WA03 WB01 'group_1   ', ' Schaden'                , true, true,   false,   true,     false,     true,...true;


If the access rights of a specific JAAS Subject for a specific workbasket are to be determined, all workbasket access items for this workbasket and each involved access id are retrieved. For example, if the subject contains accessIds 'teamlead_2' and 'group_1', and the requested workbasket is WB01, the following records are involved

ID      WB_ID,ACCESS_ID,     ACCESS_NAME   , READ, OPN, APPD, TRSFR, DISTR, C1, .., C12)
------+------+------------+-------------------+-----+-----+------+-------+------+-------
WA02 WB01 'teamlead_2', ' Holger '               , true, true,   false,   false,    true,      true,...true;
WA03 WB01 'group_1   ', ' Schaden'                , true, true,   false,   true,     false,     true,...true;

In each column, the algorithm checks whether at least one 'true' is contained and if this is the case, the corresponding access right is granted. If all records in a specific column contain value 'false', the access right is denied. In the current case, access right 'APPEND' would be denied, all other rights are granted.

This access logic complicates our queries since we show to a user only those objects that he is allowed to see.  As an example, the QueryMapper.queryTaskSummaries() method contains the following snippet:

…. AND t.WORKBASKET_ID IN ( "
+ "SELECT WID from (SELECT WORKBASKET_ID as WID, MAX(PERM_READ::int) as MAX_READ FROM WORKBASKET_ACCESS_LIST AS s where "
+ "ACCESS_ID IN (<foreach item='item' collection='accessIdIn' separator=',' >#{item}</foreach>) "
+ "group by WORKBASKET_ID ) AS f where max_read = 1 ) " …

This snippet checks that only tasks are returned that are in a workBasket for which at least one access_id has the READ permission.

## Authorization checks in action methods of services

During action methods of the services, authorization is checked by method WorkbasketServiceImpl.checkAuthorization().
This method has to be called by all action methods in services that are subject to access restrictions. The first parameter of this method is the id of the work basket that controls the access, the second (and following) parameter(s) specify the requested permission(s). The method retrieves the user and group ids that request this access by calling CurrentUserContext.getAccessIds(). Then it checks whether there exist WorkbasketAccessItem(s) that grant the requested permission(s) for the specified work basket to the current user. An instance of a CurrentUserContext class can be received from the TaskanaEngine. 
As an example, method TaskServiceImpl.createTask checks that the current user has the right to insert the task into the specified work basket. This is done by calling  workbasketService.checkAuthorization(workbasketId,WorkbasketPermission.APPEND);