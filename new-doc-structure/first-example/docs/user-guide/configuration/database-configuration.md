---
sidebar_position: 3
---

# Database Configuration

We support different databases.
In order to create the default TASKANA sort order (german, case insensitive) we recommend to configure the databases as followed. We recommend to create the database with a page size of 32 k. Be aware that the sort order of query results is governed by the collation sequence that is specified at database creation. The default for the most databases is a case sensitive sort order. If you want query results to be sorted case insensitively, you should specify an appropriate collation sequence.

The database schema can be changed by setting the parameter "taskana.schema" in the "application.properties" file. This applies to Spring environments, only.

Taskana connects to the database via a DataSource. It does not support XADataSources for connections to databases.

## db2

| option                                           | reason                                                                                                                     |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| PAGESIZE 32 K                                    | needed for TASKANA (otherwise TASKANA will fail to create the database schema)                                             |
| collate using 'CLDR181_LDE_AS_CX_EX_FX_HX_NX_S3' | required to get the default TASKANA sort order (german, case insensitive). If required other sort orders can be configured |

Note: The provided options can only be set during database creation. Once a database exists, these options cannot be modified. Therefore, if you have an existing database without the recommended options, you should delete and recreate it. 

We recommend creating the database with the following command:

```
db2 create database TSKDB using codeset utf-8 territory en-us collate using 'CLDR181_LDE_AS_CX_EX_FX_HX_NX_S3' PAGESIZE 32 K
```

# PostgreSQL

Set the LANG environment variable to de_DE.utf8

## Connection options

→ Since Taskana shall be able to work in managed environments like Spring, JBoss or WebSphere as well as in non-managed environments, it must be able to deal with different environments.

To handle these requirements, the client can choose between 3 connection management modes for Taskana:

| mode         | description                                                                                                                                                                                                                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PARTICIPATE  | Taskana  participates in surrounding global transactions. It acquires and  releases connections at begin / end of each API call and relies on the  infrastructure to do commit processing This is the default mode.                                                                                   |
| AUTOCOMMIT   | Taskana commits each single API call separately                                                                                                                                                                                                                                                       |
| EXPLICIT     | Taskana  doesn't acquire, commit or close connections. The client is responsible  for opening a connection, passing it to Taskana, committing or  rollbacking it. In order to close a connection, the client has to call either TaskanaEngine.closeConnection() or TaskanaEngine.setConnection(null). |