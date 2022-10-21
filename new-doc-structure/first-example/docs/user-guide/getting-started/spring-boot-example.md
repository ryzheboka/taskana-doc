---
sidebar_position: 2
---

# Example Spring Boot

### Step 1: Initialize an empty project

Go to [Spring Initializer](https://start.spring.io/) and create an example project. Choose the same options as in the Screenshot, then click on "Generate"

![empty spring boot project](../images/Schritt1besserbesser.png)

Unpack the project and open it in InelliJ

![unpacked project](../images/Schritt2.png)

### Step 2: Add dependencies
Add following dependencies to the pom in the demo project:

1. ldap dependencies:
```
<dependency>
    <groupId>org.springframework.ldap</groupId>
    <artifactId>spring-ldap-core</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-ldap</artifactId>
</dependency>
<dependency>
    <groupId>com.unboundid</groupId>
    <artifactId>unboundid-ldapsdk</artifactId>
</dependency>
```
2. database dependencies:

```
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
```
3. taskana dependencies




