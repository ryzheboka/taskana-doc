---
sidebar_position: 2
---

# List of provided SPIs

Please read [general SPI information](SPI-usage.md) in order to understand SPIs in TASKANA in general. 

Currently, TASKANA provides the following SPIs:

- **pro.taskana.spi.history.api.TaskanaHistory** : Look up the history of TASKANA. You can read more use cases for HistoryService [here](./history-SPI.md).
- **pro.taskana.spi.priority.api.PriorityServiceProvider** : Add rules for the calculation of Task priority.
- **pro.taskana.spi.routing.api.TaskRoutingProvider** : Add rules for automated Workbasket assignment for some of the new Tasks.
- **pro.taskana.spi.task.api.AfterRequestChangesProvider** : Add actions on Task that are executed after changes on reviewed Task have been requested (See more about Task Lifecycle [here](../reference/lifecycle.drawio)).
- **pro.taskana.spi.task.api.AfterRequestReviewProvider** : Add actions on Task that are executed after a review on a claimed Task has been requested (See more about Task Lifecycle [here](../reference/lifecycle.drawio)).
- **pro.taskana.spi.task.api.BeforeRequestChangesProvider** : Add actions on Task that are executed before changes on a reviewd Task have been requested (See more about Task Lifecycle [here](../reference/lifecycle.drawio)).
- **pro.taskana.spi.task.api.BeforeRequestReviewProvider** : Add actions on Task that are executed before a review on a claimed Task has been requested (See more about Task Lifecycle [here](../reference/lifecycle.drawio)).
- **pro.taskana.spi.task.api.CreateTaskPreprocessor** : Add actions on Task that are executed before a new is created.
- **pro.taskana.spi.task.api.ReviewRequiredProvider** : Add actions on Task that are executed after changes on reviewed Task have been requested (See more about Task Lifecycle [here](../reference/task-lifecycle.md)).
- **pro.taskana.spi.user.api.RefreshUserPostprocessor** : Add actions on User that are executed each time after the User is refreshed.