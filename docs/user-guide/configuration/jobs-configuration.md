---
sidebar_position: 5
---

# TASKANA-jobs

Jobs are automated processes that run in the background of the application, usually periodically. They are scheduled for configurable times and then run by the scheduler. For example, the TaskCleanupJob deletes Tasks after they reached a certain time passed after their completion. You can read more about jobs [here](../features/jobs.md). 
Common options for jobs customization are listed and explained as following:
- **Batch size**: Maximum number of entities that are processed in one job
- **Max number of retries**: Maximum number of retries if a job fails 
- **First run at**: The date for the first run of the job
- **Run every**: The interval between individual runs of a job

Additionally, different jobs have other special parameters for customization. 

You can also configure the scheduler. In the initial run of the scheduler, all jobs are scheduled for the first time. Each run, the scheduler looks up which jobs are past their due date. These jobs get executed. The behavior of jobs and the scheduler in TASKANA can be customized in the configuration file ```taskana.properties``` with the following parameters:

## Scheduler Configuration
| Parameter                                | Description                                                    | Sample Value | Default Value |
|------------------------------------------|----------------------------------------------------------------|--------------|---------------|
| taskana.jobs.scheduler.enabled           | Enabling automated scheduling of jobs                          | false        | true          |
| taskana.jobs.scheduler.initialStartDelay | Start delay before the first job gets scheduled                | 30           | 100           |
| taskana.jobs.scheduler.period            | The time interval between the individual runs of the scheduler | 12           | 5             |
| taskana.jobs.scheduler.periodTimeUnit    | The unit for scheduler.initialStartDelay and scheduler.period  | HOURS        | MINUTES       |
## General Jobs Configuration 
This configuration options are overwritten by job specific configuration options

| Parameter               | Description                                                                 | Sample Value         | Default Value        |
|-------------------------|-----------------------------------------------------------------------------|----------------------|----------------------|
| taskana.jobs.maxRetries | number of automatic retries after a job has failed                          | 5                    | 3                    |
| taskana.jobs.batchSize  | upper bound of how many tasks can be processed by one job                   | 45                   | 100                  |
| taskana.jobs.runEvery   | period of time between the executions of jobs (Duration in ISO 8601 format) | P1D                  | P1D                  |
| taskana.jobs.firstRunAt | first time the job is run (DateTime n ISO 8601 format)                      | 2018-07-25T08:00:00Z | 2023-01-01T00:00:00Z |


## Example
**Setup**: In this example, the application starts on 5th April 2017 at 5pm. The scheduler has an initialStartDelay of 2 hours. The period of the scheduler is 3 hours. There is one Job active.This Job should be first run on 5th April at 6pm. The Jobs "runEvery" parameter is set to 2 hours.

**Result**: 
- 5th April 5pm: Application starts.
- 5th April 6pm: The Job becomes due. However, it isn't run yet.
- 5th April 7pm: Scheduler runs the first time. It runs the Job.
- 5th April 9pm: The Job becomes due. However, it isn't run yet.
- 5th Aril 10pm: Scheduler runs the second time. It runs the Job.
- 5th Aril 12pm: The Job becomes due. However, it isn't run yet.
- 6th April 1am: Scheduler runs the third time. It runs the Job.
- 6th Aril 3am: The Job becomes due. However, it isn't run yet.


## TaskCleanupJob, WorkbasketCleanupJob and HistoryCleanupJob Configuration

| Parameter                                                          | Description                                                                                                                                 | Sample Value         | Default Value |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------|---------------|
| taskana.jobs.cleanup.task.enable                                   | Enabling automated cleanup of completed tasks after a period of time specified by job.runEvery                                              | true                 | true          |
| taskana.jobs.cleanup.task.minimumAge                               | the completed task can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format)                     | P10D                 | P14D          |
| taskana.jobs.cleanup.task.allCompletedSameParentBusiness           | Prevent deletion of tasks if other tasks with same parent business process ID are not yet completed                                         | false                | true          |
| taskana.jobs.cleanup.workbasket.enable                             | Enable WorkbasketCleanupJob to cleanup completed workbaskets after a period of time if no pending tasks                                     | true                 | true          |
| taskana.jobs.cleanup.history.simple.enable                         | Enables the HistoryCleanupJob to delete history events                                                                                      | false                | false         |
| taskana.jobs.cleanup.history.simple.minimumAge                     | the created history event can be deleted by the cleanup only after this period of time or later  (Duration in ISO 8601 format)              | P60D                 | P14D          |
| taskana.jobs.cleanup.history.simple.batchSize                      | upper bound of how many history events can be processed by one history cleanup job                                                          | 45                   | 100           |
| taskana.jobs.cleanup.history.simple.allCompletedSameParentBusiness | Prevent deletion of Task History Events if other Task History Events with same parent business process ID have types other than "CREATED" 	 | false                | true          |

## TaskUpdatePriorityJob Configuration

| Parameter                             | Description                                                                                      | Sample Value         | Default Value        |
|---------------------------------------|--------------------------------------------------------------------------------------------------|----------------------|----------------------|
| taskana.jobs.priority.task.enable     | Enabling automated recalculation of priority of each tasks that is not in an endstate            | true                 | false                |
| taskana.jobs.priority.task.batchSize  | upper bound of how many tasks can be processed by one TaskUpdatePriorityJob                      | 70                   | 100                  |
| taskana.jobs.priority.task.runEvery   | period of time between the executions of the TaskUpdatePriorityJob (Duration in ISO 8601 format) | P2D                  | P1D                  |
| taskana.jobs.priority.task.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)                                     | 2021-08-03T08:00:00Z | 2023-01-01T00:00:00Z |
| taskana.jobs.priority.task.active     | the job will only be executed if the flag is set to true                                         | true                 |                      |

## UserInfoRefreshJob Configuration

| Parameter                            | Description                                                                                   | Sample Value         | Default Value        |
|--------------------------------------|-----------------------------------------------------------------------------------------------|----------------------|----------------------|
| taskana.jobs.refresh.user.enable     | Enable job to refresh all user info after a period of time                                    | true                 | false                |
| taskana.jobs.refresh.user.runEvery   | period of time between the executions of the UserInfoRefreshJob (Duration in ISO 8601 format) | P2D                  | P1D                  |
| taskana.jobs.refresh.user.firstRunAt | first time the job is executed (DateTime in ISO 8601 format)                                  | 2021-08-03T22:00:00Z | 2023-01-01T23:00:00Z |

## CustomJobs Configuration

| Parameter               | Description                                            | Sample Value               | Default Value |
|-------------------------|--------------------------------------------------------|----------------------------|---------------|
| taskana.jobs.customJobs | Initialize custom jobs by specifying path to job class | example.package.ExampleJob |               |
