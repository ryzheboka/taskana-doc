---
sidebar_position: 3
---

# HistoryService SPI

In order to follow this article, please read [general SPI information](howToUseServiceProviderInterfaces.md) before proceeding.

The HistoryService can be used for different purposes. In general, it tracks actions performed by TASKANA makes this information available for further usage. Below, you can see example business use cases for the History Service.
## Use Cases for the History Service
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
    - How often was is required to change the classification of the Task/document?
- Reporting:
    - How many tasks of what classification did we receive this day/week/month?
    - How many tasks have been completed by team/location/etc.?

Additionaly to the SPI, TASKANA already provides an implementation for the HistoryService at pro.taskana.simplehistory.impl.SimpleHistoryServiceImpl
