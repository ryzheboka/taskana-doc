---
sidebar_position: 1
---

# General Configuration
TASKANA uses a number of properties to enable the out-of-the-box integration with a LDAP server. These properties are described here.

As the LDAP integration is part of the REST API, which is based on Spring, the LDAP properties habe to be placed in the application.properties file, not in the taskana.properties.

|Parameter                        |Description                                              |Sample Value          |Optional|
|---------------------------------|---------------------------------------------------------|----------------------|--------|               
|taskana.ldap.serverUrl                   |                                                     |ldap://localhost:10389
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
|taskana.ldap.minSearchForLength          ||3|true
|taskana.ldap.maxNumberOfReturnedAccessIds||50|true
|taskana.ldap.groupsOfUser                 |deprecated. Please use taskana.ldap.groupsOfUser.name instead.   |uniquemember|true
|taskana.ldap.groupsOfUser.name            |Name of the attribute in a group object, which specifies the member of the group.                   |uniquemember|true
|taskana.ldap.groupsOfUser.type            |Type of the attribute in a group object, which specifies the member of the group.If you specify ‘dn’ as the type, TASKANA assumes that this field contains exactly the full dn of the member.|dn|true
