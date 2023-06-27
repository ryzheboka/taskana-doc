---
sidebar_position: 3
---

# LDAP
TASKANA provides [LDAP](https://ldap.com/learn-about-ldap/) support by showing LDAP-usage in its example module ```taskana-rest-spring-example-boot```. In order to configure LDAP for usage with TASKANA, you need an .ldif file. Additionaly, you need to configure LDAP in the ``application.properties`` file using following parameters: 

|Parameter                        |Description                                              |Sample Value          |
|---------------------------------|---------------------------------------------------------|----------------------|              
|taskana.ldap.serverUrl                   |The url of the ldap server used by TASKANA.                                                     | ldap://localhost:10389
|taskana.ldap.bindDn                      |The bind dn when connecting.|uid=admin
|taskana.ldap.bindPassword                |The password for connecting with the bind dn.|secret
|taskana.ldap.baseDn                      |The base dn of the ldap server.|ou=Test,O=TASKANA
|taskana.ldap.userSearchBase              |The base dn of each use.|cn=users
|taskana.ldap.userSearchFilterName        |Name of the attribute for filtering users.|objectclass
|taskana.ldap.userSearchFilterValue       |Value of the attribute for filtering users.|person
|taskana.ldap.userFirstnameAttribute      |Name of the attribute that is used to specify the first name of the user in the ldif file. |givenName
|taskana.ldap.userLastnameAttribute       |Name of the attribute that is used to specify the last name of the user in the ldif file.|sn
|taskana.ldap.userFullnameAttribute       |Name of the attribute that is used to specify the full name of the user in the ldif file.|cn
|taskana.ldap.userPhoneAttribute          |Name of the attribute that is used to specify the phone of the user in the ldif file.|phoneNumber
|taskana.ldap.userMobilePhoneAttribute    |Name of the attribute that is used to specify the mobile phone of the user in the ldif file.|mobileNumber
|taskana.ldap.userEmailAttribute          |Name of the attribute that is used to specify the email of the user in the ldif file.|email
|taskana.ldap.userOrglevel1Attribute      |Name of the attribute that is used to specify the first organization level of the user in the ldif file.|orgLevel1
|taskana.ldap.userOrglevel2Attribute      |Name of the attribute that is used to specify the second organization level of the user in the ldif file.|orgLevel2
|taskana.ldap.userOrglevel3Attribute      |Name of the attribute that is used to specify the third organization level of the user in the ldif file.|orgLevel3
|taskana.ldap.userOrglevel4Attribute      |Name of the attribute that is used to specify the fourth organization level of the user in the ldif file.|orgLevel4
|taskana.ldap.userIdAttribute             |Name of the attribute that is used to specify the id of the user in the ldif file.|uid
|taskana.ldap.userMemberOfGroupAttribute  |Name of the attribute that is used to specify groups of the user in the ldif file.|memberOf
|taskana.ldap.groupSearchBase             |The base dn of each group
|taskana.ldap.groupSearchFilterName       |Name of the attribute for filtering groups.|objectclass
|taskana.ldap.groupSearchFilterValue      |Value of the attribute for filtering goups.|groupOfUniqueNames|
|taskana.ldap.groupNameAttribute          |Name of the attribute that is used to specify the name of the group in the ldif file.|cn
|taskana.ldap.minSearchForLength<br /> (optional)         ||3|
|taskana.ldap.maxNumberOfReturnedAccessIds<br />(optional)||50|
|taskana.ldap.groupsOfUser<br /> (optional)                 |deprecated. Please use taskana.ldap.groupsOfUser.name instead.   |uniquemember|
|taskana.ldap.groupsOfUser.name<br />  (optional)            |Name of the attribute in a group object, which specifies the member of the group.                   |uniquemember|
|taskana.ldap.groupsOfUser.type<br />(optional)           |Type of the attribute in a group object, which specifies the member of the group.If you specify ‘dn’ as the type, TASKANA assumes that this field contains exactly the full dn of the member.|dn|
