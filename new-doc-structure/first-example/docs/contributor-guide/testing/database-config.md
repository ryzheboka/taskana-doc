---
sidebar_position: 4
---

# Database Configuration for Testing

!! Rework !!

By default the unit tests will run with the H2 in memory database. If you want to run the tests with a different database you have to create the taskanaUnitTest.properties file in your home directory.

That file must contain the following information:

    jdbcDriver

    jdbcUrl

    dbUserName

    dbPassword

    schemaName

Use preconfigured database docker images

Requirements: Docker on you machine

In the folder docker-databases you find a prepare_db script which starts the requested database and create the appropriate taskanaUnitTest.properties file for you. 
*nix (prepare_db.sh)

Execute ./docker-databases/prepare_db.sh -h and follow the help output for that script. It tells you how it works and which databases can be used
Windows (prepare_db.bat)

Just execute the file. This is an interactive bat file which provides all the options for you.
Examples for taskanaUnitTest.properties

```
DB2 11.5
taskanaUnitTest.properties
jdbcDriver=com.ibm.db2.jcc.DB2Driver
jdbcUrl=jdbc:db2://<host>:<port>/<database>
dbUserName=<username>
dbPassword=<password>
schemaName=TASKANA
POSTGRES 10 latest
taskanaUnitTest.properties
jdbcDriver=org.postgresql.Driver
jdbcUrl=jdbc:postgresql://<host>:<port>/<database>
dbUserName=<username>
dbPassword=<password>
schemaName=taskana
```