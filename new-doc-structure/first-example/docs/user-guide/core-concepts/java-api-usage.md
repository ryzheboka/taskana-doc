---
sidebar_position: 3
---

# Java-API usage
import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!./lib-structure.drawio';
import entities from '!!raw-loader!./entities.drawio';
import architecture from '!!raw-loader!./architecture.drawio';

Java-API can be found in the "api" folders in the "lib" folder.

<Drawio content={simpleGraph} />

- ``pro.taskana.classification.api`` 

- ``pro.taskana.task.api ``

- ``pro.taskana.workbasket.api``: 

- ``pro.taskana.common.api``: 

- ``pro.taskana.monitor.api``: 

- ``pro.taskana.user.api``: 

- ``pro.taskana.spi``: 


## Taskana Entities
All Taskana Entities can be found in the Java API (link). For better readability, they are capitalized in the documentation. 

Taskana operates using Tasks, Classifications and Workbaskets. The entities are stored in the configured database (link). 

 Besides Tasks, Classifications and Workbaskets, there are also interfaces for summary objects: TaskSummaries, ClassificationSummaries and WorkbasketSummaries. Each summary object refers to a full entity, but only contains the most important imformation. For example, a TaskSummary with id 1234 refers to the Task with the id 1234. However, the TaskSummary does not contain the Attachment of the Task as well as some other information.


## Operations on Entities
You can create, update and delete entities. These operations on entities can be found in the corresponding Services: TaskService, CLassificationService and WorkbasketService. You can also make queries with filtering and sorting by properties.  

### How to create a Task (works for Workbasket and Classification too): 
1. First create a Task object that is not in the database yet with method 
    ```TaskService.newTask()```
2. Then set some properties of that Task via its setter methods.
3. Finally persist this Task to the database via ```TaskSerivce.createTask()```

### How to manipulate a Task?


Not all properties of a task can be set via the API. You must rather use the Action methods of TaskService to manipulate these properties.
For example, a task is created via TaskService.newTask(). In this call, you have to specify in which workbasket the task is to be created. This can either be done by specifying the Id of the workbasket or key and domain of the workbasket (note: a workbasket key is a human readable key that identifies a workbasket inside a specific domain. WorkbasketKey is not unique by itself, but only in combination with the domain).
Once a task object is created, its associated workbasket can only be changed by method TaskSerivce.transfer().
In addition, once a task is created, it is in the state READY. The state of a task can only be modified by TaskService methods claim, forceClaim, cancelClaim, forceCancelClaim, completeTask, forceCompleteTask, and deleteTask.
In addition, once an action method modfies a task, several timestamps on the task, like claimed, completed, modfied, etc. are changed.
Corresponding considerations apply to Workbasket and Classification objects.
How to use Taskana’s java API in an application?

 

When you intend to use taskana in your application, you have to follow the following steps:

    get a DataSource that addresses taskana's database.

    Create a pro.taskana.configuration.TaskanaEngineConfiguration passing in that DataSource.

    Call TaskanaEngineConfiguration.buildEngine to obtain a TaskanaEngine.

    Use TaskanaEngine's method getClassificationService, getTaskService and getWorkbasketService in order to obtain the various service objects that are required to create, delete and manipulate tasks, workbaskets and classifications.
