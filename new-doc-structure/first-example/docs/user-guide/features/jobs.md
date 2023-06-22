---
sidebar_position: 4
---

# TASKANA Jobs

During the usage of TASKANA, some functionality has to be executed in the background implicitly. Customizable TASKANA Jobs run at a fixed rate that can be specified during TASKANA set up. Different time intervals relevant for individual jobs can be customized as well. All job configuration options are explained [here](../configuration/taskana-properties/jobs-configuration.md).

The jobs provided by TASKANA are listed below.

## TaskPriorityUpdateJob

Updates Task priority for each Task once in a fixed time interval.

## UserInfoRefreshJob

Loads User Info into the User table from the .ldif file once in a fixed time interval.

## TaskCleanupJob

Deletes Tasks comleted longer than a fixed time ago. This Job also runs at a fixed rate.

## HistoryCleanupJob

Deletes HistoryEvents for deleted Tasks. This Job also runs at a fixed rate.
