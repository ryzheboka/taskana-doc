---
sidebar_position: 3
---

# Java-API usage
import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!./lib-structure.drawio';
import entities from '!!raw-loader!./entities.drawio';
import architecture from '!!raw-loader!./architecture.drawio';

The following article describes the practical implementation of main concepts of TASKANA, explained in the [Overview](./overview.md). Please be familiar with the contents of the Overview in order to understand this article.

## Where to find entities and operations on them
The Overview describes [entities](./overview.md#taskana-entities) and [operations on them](./overview.md#operations-on-entities). 

The Task, Classification and Workbasket as well as related entities can be found in ``pro.taskana.task.api.models``, ``pro.taskana.classification.api.models``, ``pro.taskana.workbasket.api.models``. Besides Tasks, Classifications and Workbaskets, TASKANA also operates using summary objects: TaskSummaries, ClassificationSummaries and WorkbasketSummaries. They represent the same concepts as Tasks, Classifications and Workbaskets. Each summary object refers to a full entity, but only contains the most important information. For example, a TaskSummary with id 1234 refers to the Task with the id 1234. However, the TaskSummary does not contain the Attachment of the Task as well as some other information. The summary objects can be found in the same package as the complete entity interfaces.

Creating, Deleting and Updating can be done using TaskService, ClassificationService and WorkbasketService. The Services can be found in`` pro.taskana.task.api``, ``pro.taskana.classification.api``, ``pro.taskana.workbasket.api``. The corresponding queries can be also found in these packages. They are called  TaskQuery, ClassificationQuery and WorkbasketQuery.

## The core of the Java-API 

Below is the diagramm that shows different packages that make up the Java-API of TASKANA. They can be found in the ``lib/taskana-core`` folder
<Drawio content={simpleGraph} />
<br />

- ``pro.taskana.classification.api``:
    * The Classification entity that consists of the Classification and ClassificationSummary interfaces in the models folder
    * Methods to create, update and delete a Classification in the ClassificationService interface
    * Methods to query the Classification with filtering and sorting in the ClassificationQuery interface
    * Used Exceptions and Enums



- ``pro.taskana.task.api ``:
    - The Task entity that consists of the Task and TaskSummary interfaces in the models folder
    - The Attachment entity that consists of the Attachment and AttachmentSummary interfaces in the models folder
    - The ObjectReference entity that consists of the ObjectReference interface in the models folder
    - Methods to create, update and delete a Task in the TaskService interface
    - Methods to query the Task with filtering and sorting in the TaskQuery interface
    - Used Exceptions and Enums


- ``pro.taskana.workbasket.api``:
    - The Workbasket entity that consists of the Workbasket and WorkbasketSummary interfaces in the models folder
    - The WorkbasketAccessItem entity that consists of the WorkbasketAccessItem interface
    - Methods to create, update and delete a Workbasket in the WorkbasketService interface
    - Methods to query the Workbasket with filtering and sorting in the WorkbasketQuery interface
    - Used Exceptions and Enums 


- ``pro.taskana.common.api``:
    - TaskanaEngine interface that brings all services of TASKANA together
    - Other, non-entity-related services


- ``pro.taskana.monitor.api``: 
    - Report models for aggregating data on an entity can be found in the reports folder
    - Reports can be created using ReportBuilders from the report folder. They make filtering of entities included in a Report possible
    - Methods to create ReportBuilder are in the MonitorService interface


- ``pro.taskana.user.api``: 
    - The User entity that consists of the User interface in the models folder
    - Methods to create, update and delete a User in the UserService interface
    - Used Exceptions 

- ``pro.taskana.spi``: 
    - contains all Service Provider Interfaces (SPIs) of TASKANA. An SPI allows the client to change the behavior of TASKANA by implementing the SPI. More about SPIs can be found here (link)

### How to create an Entity using the Java-API? 

#### Example Task 
1. First create a Task object that is not in the database yet with method 
    ```TaskService.newTask```
2. Then set some properties of that Task via its setter methods.
3. Finally, persist this Task to the database via ```TaskSerivce.createTask```

You can find corresponding functions ```WorkbasketService.newWorkbasket```, ```ClassificationService.newClassification```  ```WorkbasketService.createWorkbasket``` and ```ClassificationService.createClassification``` in other Services. They can be used to create other entities.

### How to manipulate an Entity using the Java-API? 
Some properties of an entity can be set via the entity interface (e.g. the Task interface) in the TASKANA [Java-API](java-api-usage.md). For example, the method ``  Task.setDescription`` can be used to set the description of a Task.  However, some properties of entities cannot be set this way. For example, a Workbasket has to be specified during the creation of a Task. You can change the Workbasket by transferring the Task using ``TaskService.transfer``. The state of a Task can only be modified by corresponding TaskService methods ``claim``, ``forceClaim``, ``cancelClaim`` etc. You can read more about the status changes here (link).

### How to integrate the Java API of TASKANA- into your application?

- Find out the DataSource for your TASKANA database. You can read here (link) about setting it up
- Pass the DataSource to the constructor of ``pro.taskana.configuration.TaskanaEngineConfiguration``.
- Build a TASKANAEngine using ``TaskanaEngineConfiguration.buildEngine``.

You can use the corresponding Services by getting them with the methods ``TaskanaEngine.getClassificationService``, ``TaskanaEngine.getTaskService`` and ``TaskanaEngine.getWorkbasketService``.
