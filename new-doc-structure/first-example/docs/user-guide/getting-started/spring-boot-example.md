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

1. ldap and security dependencies:
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
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
2. database dependencies:

```
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
<dependency>
```
3. taskana dependencies:

```
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-common-data</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-web</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-common-logging</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-rest-spring</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
```
4. web dependencies:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

5. spring depenpendencies:

```
<dependency>
    <groupId>org.springframework.plugin</groupId>
    <artifactId>spring-plugin-core</artifactId>
    <version>2.0.0.RELEASE</version>
</dependency>


```

** All dependencies **

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.plugin</groupId>
    <artifactId>spring-plugin-core</artifactId>
    <version>2.0.0.RELEASE</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-web</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-common-logging</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-rest-spring</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>pro.taskana</groupId>
    <artifactId>taskana-common-data</artifactId>
    <version>5.7.1-SNAPSHOT</version>
</dependency>
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
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
<dependency>
```

After adding all dependencies, add a repo for taskana snapshot

6. repo for taskana snapshot

```
<repositories>
    <repository>
        <id>snapshots-repo</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
        <releases><enabled>true</enabled></releases>
        <snapshots><enabled>true</enabled></snapshots>
    </repository>
</repositories>
```

