---
sidebar_position: 2
---

# LDAP Configuration
Kadai allows you to configure security as part of the REST-API. The properties described in this article configure authorization using [ldap](https://ldap.com/learn-about-ldap/). Because the REST-API uses Spring, the LDAP properties are in the ``application.properties`` file. All parameters listed here except the ones marked as optional are required for the Kadai Application.

|Parameter                        |Description                                              |Sample Value          |
|---------------------------------|---------------------------------------------------------|----------------------|              
|taskana.ldap.serverUrl                   |                                                     | ldap://localhost:10389
|taskana.ldap.bindDn                      ||uid=admin
|taskana.ldap.bindPassword                ||secret
|taskana.ldap.baseDn                      ||ou=Test,O=TASKANA
|taskana.ldap.userSearchBase              ||cn=users
|taskana.ldap.userSearchFilterName        ||objectclass
|taskana.ldap.userSearchFilterValue       ||person
|taskana.ldap.userFirstnameAttribute      ||givenName
|taskana.ldap.userLastnameAttribute       ||sn
|taskana.ldap.userFullnameAttribute       |cn
|taskana.ldap.userPhoneAttribute          ||phoneNumber
|taskana.ldap.userMobilePhoneAttribute    ||mobileNumber
|taskana.ldap.userEmailAttribute          ||email
|taskana.ldap.userOrglevel1Attribute      ||orgLevel1
|taskana.ldap.userOrglevel2Attribute      ||orgLevel2
|taskana.ldap.userOrglevel3Attribute      ||orgLevel3
|taskana.ldap.userOrglevel4Attribute      ||orgLevel4
|taskana.ldap.userIdAttribute             ||uid
|taskana.ldap.userMemberOfGroupAttribute  ||memberOf
|taskana.ldap.groupSearchBase             |
|taskana.ldap.groupSearchFilterName       ||objectclass
|taskana.ldap.groupSearchFilterValue      ||groupOfUniqueNames|
|taskana.ldap.groupNameAttribute          ||cn
|taskana.ldap.minSearchForLength (optional)         ||3|
|taskana.ldap.maxNumberOfReturnedAccessIds(optional)||50|
|taskana.ldap.groupsOfUser (optional)                 |deprecated. Please use taskana.ldap.groupsOfUser.name instead.   |uniquemember|
|taskana.ldap.groupsOfUser.name  (optional)            |Name of the attribute in a group object, which specifies the member of the group.                   |uniquemember|
|taskana.ldap.groupsOfUser.type (optional)           |Type of the attribute in a group object, which specifies the member of the group.If you specify ‘dn’ as the type, TASKANA assumes that this field contains exactly the full dn of the member.|dn|
