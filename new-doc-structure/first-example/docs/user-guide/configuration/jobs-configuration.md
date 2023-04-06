---
sidebar_position: 5
---

# TASKANA-jobs

Jobs are automated processes that run in the background of the application, usually periodically. They are scheduled for configurable times. This way, they can be created and run automatically. For example, the TaskCleanupJob deletes Tasks after they reached a certain time passed after their completion. You can read more about jobs [here](../features/jobs.md). 
Common options for jobs customization are listed and explained as following:
- **Batch size**: Maximum number of entities that are processed in one job
- **Max number of retries**: Maximum number of retries if a job fails 
- **First run at**: The date for the first run of the job
- **Run every**: The interval between individual runs of a job

Additionally, different jobs have other special parameters for customization. 

You can also configure the scheduler. In the inital run of the scheduler, all jobs are scheduled for the first time. Each run, the scheduler looks up which jobs are past their due date. These jobs get executed. The behavior of jobs and the scheduler in TASKANA can be customized in the configuration file ```taskana.properties``` with the following parameters:

## Scheduler Configuration
 Parameter                                | Description                                                    | Sample Value |
|------------------------------------------|----------------------------------------------------------------|--------------|
| taskana.jobs.scheduler.enabled           | Enabling automated scheduling of jobs                          | false        |
| taskana.jobs.scheduler.initialStartDelay | Start delay before the first job gets scheduled                | 30           |
| taskana.jobs.scheduler.period            | The time interval between the individual runs of the scheduler | 12           |
| taskana.jobs.scheduler.periodTimeUnit    | The unit for scheduler.initialStartDelay and scheduler.period  | HOURS        |
## General Jobs Configuration 
This configuration options are overwritten by job specific configuration options

| Parameter                          | Description                                                     | Sample Value |
|------------------------------------|-----------------------------------------------------------------|--------------|
| taskana.jobs.maxRetries | number of automatic retries after a job has failed        | 5            |
| taskana.jobs.batchSize  | upper bound of how many tasks can be processed by one job           | 45           |


## TaskCleanupJob and HistoryCleanupJob Configuration

| Parameter                               | Description                                                                                                               | Sample Value         |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------|
| taskana.jobs.cleanup.runEvery           | period of time between the executions of the cleanup job on tasks (Duration in ISO 8601 format)                                                       | P2D                  |
| taskana.jobs.cleanup.firstRunAt         | first time the cleanup job on tasks is run (DateTime n ISO 8601 format)                                                              | 2021-08-03T08:00:00Z |
| taskana.jobs.cleanup.minimumAge         | the completed task can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format)        | P10D                 |
| taskana.jobs.history.cleanup.runEvery   | period of time between the executions of the cleanup job on history events (Duration in ISO 8601 format)                                                       | P7D                  |
| taskana.jobs.history.cleanup.firstRunAt | first time the cleanup job on history events is run (DateTime n ISO 8601 format)                                                              | 2021-08-03T08:00:00Z |
| taskana.jobs.history.cleanup.minimumAge | the created history event can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format) | P60D                 |
| taskana.jobs.history.batchSize     | upper bound of how many history events can be processed by one history cleanup job | 45           |

## TaskUpdatePriorityJob Configuration

| Parameter                        | Description                                                           | Sample Value         |
|----------------------------------|-----------------------------------------------------------------------|----------------------|
| taskana.jobs.priority.batchSize   | upper bound of how many tasks can be processed by one TaskUpdatePriorityJob                | 70                  |
| taskana.jobs.priority.runEvery   | period of time between the executions of the TaskUpdatePriorityJob (Duration in ISO 8601 format)   | P2D                  |
| taskana.jobs.priority.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)                 | 2021-08-03T08:00:00Z |
| taskana.jobs.priority.active     | the job will only be executed if the flag is set to true | true                |

## UserInfoRefreshJob Configuration

| Parameter                    | Description                                                         | Sample Value         |
|------------------------------|---------------------------------------------------------------------|----------------------|
| taskana.jobs.user.runEvery   | period of time between the executions of the UserInfoRefreshJob (Duration in ISO 8601 format) | P2D                  |
| taskana.jobs.user.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)               | 2021-08-03T22:00:00Z |