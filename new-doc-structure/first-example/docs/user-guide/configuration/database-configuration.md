---
sidebar_position: 3
---

# Database Configuration

We support following different databases:

- H2 version 2.0
- or DB2 version ???
- or PostgresSQL version ???

Taskana connects to the database via a DataSource. It does not support XADataSources for connections to databases. The database schema can be changed by setting the parameter "taskana.schema" in the "application.properties" file. This applies to Spring environments, only.


The recommended page size for the database is 32 k. It's needed to create the database schema. The sort order of query results can be changed by the collating sequence that is specified at database creation. The default for the most databases is a case sensitive sort order. If you want query results to be sorted case insensitively, you should specify an appropriate collating sequence.

## Connection options

→ Since Taskana shall be able to work in managed environments like Spring, JBoss or WebSphere as well as in non-managed environments, it must be able to deal with different environments.

To handle these requirements, the client can choose between 3 connection management modes for Taskana:

| mode         | description                                                                                                                                                                                                                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PARTICIPATE  | Taskana  participates in surrounding global transactions. It acquires and  releases connections at begin / end of each API call and relies on the  infrastructure to do commit processing This is the default mode.                                                                                   |
| AUTOCOMMIT   | Taskana commits each single API call separately                                                                                                                                                                                                                                                       |
| EXPLICIT     | Taskana  doesn't acquire, commit or close connections. The client is responsible  for opening a connection, passing it to Taskana, committing or  rollbacking it. In order to close a connection, the client has to call either TaskanaEngine.closeConnection() or TaskanaEngine.setConnection(null). |