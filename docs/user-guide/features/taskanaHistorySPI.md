---
sidebar_position: 3
---

# TaskanaHistory SPI

In order to follow this article, please read [general SPI information](howToUseServiceProviderInterfaces.md) before proceeding.

The TaskanaHistory can be used for different purposes. In general, it tracks actions performed by TASKANA, like creation of Workbaskets, completion of Tasks etc.. The HistoryService makes this information available for further usage. TASKANA already provides an implementation for the TaskanaHistory described [here](#taskanahistory-implementation-and-the-corresponding-rest-service). Below, you can see example business use cases for TaskanaHistory.
## Use Cases for TaskanaHistory
- History of one business process: (relevant for specialists working on a Task of that process)
    - Who worked on it before?
    - Who transferred it to me?
    - What happened in the process before it got assigned to the user?
- Auditing:
    - Is everything completed?
    - What happend to a specific document / process?
    - Who aprroved what?
   -  Who changed something?
- Reporting: (SLA/KPI)
    - How long did a process/Task take in average?
    - How long did it take until a new message from a customer is assigned to a specialist?
    - How often was is required to change the Classification of the Task/document?
- Reporting:
    - How many Tasks of what Classification did we receive this day/week/month?
    - How many Tasks have been completed by team/location/etc.?


## TaskanaHistory Implementation and the corresponding REST-Service

Additionaly to the SPI, TASKANA already provides an implementation at pro.taskana.simplehistory.impl.SimpleHistoryServiceImpl. 
You can activate SimpleHistoryServiceImpl by adding following dependency to your pom:

```
<dependency>
      <groupId>pro.taskana.history</groupId>
      <artifactId>taskana-simplehistory-provider</artifactId>
      <version><put your TASKANA version here></version>
</dependency>
```
TASKANA also provides a REST service for SimpleHistoryServiceImpl documented [here](https://taskana.azurewebsites.net/taskana/docs/rest/simplehistory-rest-api.html). If you want to use the REST Service, you can add the following dependency to your pom:
```
<dependency>
      <groupId>pro.taskana.history</groupId>
      <artifactId>taskana-simplehistory-rest-spring</artifactId>
      <version><put your TASKANA version here></version>
</dependency>
```

