---
sidebar_position: 2
---

# Configuration of TASKANA-jobs

The Job Configuration can be done by changing values or adding entries to the configuration file "taskana.properties".

| Parameter                          | Description                                                     | Sample Value |
|------------------------------------|-----------------------------------------------------------------|--------------|
| taskana.jobs.taskupdate.maxRetries | The maximum number of automatic retries if the job fails        | 3            |
| taskana.jobs.taskupdate.batchSize  | The maximum number of task to be processed in one job           | 50           |
| taskana.jobs.history.batchSize     | The maximum number of history events to be processed in one job | 50           |

## Cleanup Job Configuration

| Parameter                               | Description                                                                                                               | Sample Value         |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------|
| taskana.jobs.cleanup.runEvery           | Cycle time for the cleanup job to run (Duration in ISO 8601 format)                                                       | P1D                  |
| taskana.jobs.cleanup.firstRunAt         | First start of the cleanup job. (DateTime n ISO 8601 format)                                                              | 2018-07-25T08:00:00Z |
| taskana.jobs.cleanup.minimumAge         | The minimum time between the completion of the task and the deletion by the cleanup  (Duration in ISO 8601 format)        | P14D                 |
| taskana.jobs.history.cleanup.runEvery   | Cycle time for the cleanup job to run (Duration in ISO 8601 format)                                                       | P5D                  |
| taskana.jobs.history.cleanup.firstRunAt | First start of the cleanup job. (DateTime n ISO 8601 format)                                                              | 2018-07-25T08:00:00Z |
| taskana.jobs.history.cleanup.minimumAge | The minimum time between the creation of the history event and the deletion by the cleanup  (Duration in ISO 8601 format) | P30D                 |

## Task priority update Job Configuration

| Parameter                        | Description                                                           | Sample Value         |
|----------------------------------|-----------------------------------------------------------------------|----------------------|
| taskana.jobs.priority.bachSize   | The maximum number of tasks to be processed in one job                | 100                  |
| taskana.jobs.priority.runEvery   | Cycle time for the cleanup job to run (Duration in ISO 8601 format)   | P1D                  |
| taskana.jobs.priority.firstRunAt | First start of the job. (DateTime in ISO 8601 format)                 | 2018-07-25T08:00:00Z |
| taskana.jobs.priority.active     | Priority will only be updated by this job, if it is flagged as active | false                |

## User Refresh Job Configuration

| Parameter                    | Description                                                         | Sample Value         |
|------------------------------|---------------------------------------------------------------------|----------------------|
| taskana.jobs.user.runEvery   | Cycle time for the refresh job to run (Duration in ISO 8601 format) | P1D                  |
| taskana.jobs.user.firstRunAt | First start of the job. (DateTime in ISO 8601 format)               | 2018-07-25T22:00:00Z |