---
sidebar_position: 1
---

# Database

In order to use TASKANA, you need to create a database yourself, and then specify it through the [DataSource](#datasource). You can see the list of the supported databases [here](../getting-started/environment.md). 
The recommended page size for the database is 32 k. It's needed to create the database schema. The sort order of query results can be changed by the collating sequence that is specified at database creation. The default for the most databases is a case sensitive sort order.  If you want query results to be sorted case insensitively, you should specify an appropriate collating sequence.

- Page size: 32k
- Encoding:  UTF-8
- Collating sequence examples: 
        - db2 (case sensitive): IDENTITY
        - postgres (case sensitive): de_DE.UTF-8

Example db2:
```
CREATE DATABASE <databaseName> USING CODESET UTF-8 COLLATE USING IDENTITY PAGESIZE 32 K 

```

Example Postgres:
```
CREATE DATABASE <databaseName> WITH ENCODING 'UTF8' LC_COLLATE='de_DE.UTF-8';
```

### DataSource

TASKANA connects to the database via a DataSource. It does not support XADataSources for connections to databases. The DataSource can be specified during the creation of TaskanaConfiguration. For example as following:
```
new TaskanaConfiguration.Builder(dataSource, true, schemaName, false)
        .initTaskanaProperties(propertiesFileName, delimiter)
        .build();
``` 
In Spring environment, the DataSource has standard spring options that can be configured in the ```application.properties``` file. You can read more about them in the Spring documentation. Here is an example: 
```
spring.datasource.url=jdbc:h2:mem:taskana;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=sa
```
###  SchemaName and Prefilling the Database

Additionally to the DataSource, you can also configure the schemaName. It can be specified during the creation of TaskanaConfiguration, as seen in the example above. The default schemaName is "TASKANA". The  schemaName can also be changed by setting the parameter "taskana.schemaName" in the ```application.properties``` file:

```
taskana.schemaName=TASKANA
```
Additionaly to that, you can configure TASKANA so that it prefills the database with sample data. You can find sample data in the folder ```common/taskana-common-data/src/main/resources/sql/sample-data```. To do that, set the "generateSampleData" property in the ```application.properties``` file to true:
```
generateSampleData=true
```

## Connection options

TASKANA supports three connection management modes: PARTICIPATE, AUTOCOMMIT and EXPLICIT. You can specify the connection management mode when creating TaskanaEngine using 

```
TaskanaEngine buildTaskanaEngine (TaskanaConfiguration configuration, ConnectionManagementMode connectionManagementMode)
```

The default mode is PARTICIPATE.

| mode         | description                                                                                                                                                                                                                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PARTICIPATE  | TASKANA  participates in surrounding global transactions. It acquires and  releases connections at begin / end of each API call and relies on the infrastructure to do the commit.                                                                                  |
| AUTOCOMMIT   | TASKANA commits each single API call separately.                                                                                                                                                                                                                                                       |
| EXPLICIT     | TASKANA  doesn't acquire, commit or close connections. The client is responsible  for opening a connection, passing it to TASKANA, committing or  rolling it back. In order to close a connection, the client has to call either TaskanaEngine.closeConnection() or TaskanaEngine.setConnection(null). |