---
sidebar_position: 2
---

# Configuration of TASKANA-jobs

Jobs are automated process that run in the background of the application. For example, the TaskCleanupJob deletes Tasks a certain time after they have been completed. You can read more about jobs here (Link). The behavior of jobs in Kadai can be customized in the configuration file "taskana.properties" with following parameters:

## General Jobs Configuration 

| Parameter                          | Description                                                     | Sample Value |
|------------------------------------|-----------------------------------------------------------------|--------------|
| taskana.jobs.maxRetries | number of automatic retries after a job has failed        | 5            |
| taskana.jobs.batchSize  | upper bound of how many tasks can be processed by one job           | 45           |


## TaskCleanupJob and HistoryCleanupJob Configuration

| Parameter                               | Description                                                                                                               | Sample Value         |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------|
| taskana.jobs.cleanup.runEvery           | period of time between the executions of the cleanup job on tasks (Duration in ISO 8601) format)                                                       | P2D                  |
| taskana.jobs.cleanup.firstRunAt         | first time the cleanup job on tasks is run (DateTime n ISO 8601 format)                                                              | 2021-08-03T08:00:00Z |
| taskana.jobs.cleanup.minimumAge         | the completed task can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format)        | P10D                 |
| taskana.jobs.history.cleanup.runEvery   | period of time between the executions of the cleanup job on history events (Duration in ISO 8601 format)                                                       | P7D                  |
| taskana.jobs.history.cleanup.firstRunAt | first time the cleanup job on history events is run (DateTime n ISO 8601 format)                                                              | 2021-08-03T08:00:00Z |
| taskana.jobs.history.cleanup.minimumAge | the created history event can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format) | P60D                 |
| taskana.jobs.history.batchSize     | upper bound of how many history events can be processed by one history cleanup job | 45           |

## TaskUpdatePriorityJob Configuration

| Parameter                        | Description                                                           | Sample Value         |
|----------------------------------|-----------------------------------------------------------------------|----------------------|
| taskana.jobs.priority.bachSize   | upper bound of how many tasks can be processed by one TaskUpdatePriorityJob                | 70                  |
| taskana.jobs.priority.runEvery   | period of time between the executions of the TaskUpdatePriorityJob (Duration in ISO 8601 format)   | P2D                  |
| taskana.jobs.priority.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)                 | 2021-08-03T08:00:00Z |
| taskana.jobs.priority.active     | the job will only be executed if the flagg is set to true | true                |

## UserInfoRefreshJob Configuration

| Parameter                    | Description                                                         | Sample Value         |
|------------------------------|---------------------------------------------------------------------|----------------------|
| taskana.jobs.user.runEvery   | period of time between the executions of the UserInfoRefreshJob (Duration in ISO 8601 format) | P2D                  |
| taskana.jobs.user.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)               | 2021-08-03T22:00:00Z |