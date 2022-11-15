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
<br />

- ``pro.taskana.classification.api`` provides following:
    * The Classification entity that consists of the Classification and ClassificationSummary interfaces in the models folder
    * Methods to create, update and delete a Classification in the ClassificationService interface
    * Methods to query the Classification with filtering and sorting in the ClassificationQuery interface
    * Used Exceptions and Enums



- ``pro.taskana.task.api `` provides following:
    - The Task entity that consists of the Task and TaskSummary interfaces in the models folder
    - The Attachment entity that consists of the Attachment and AttachmentSummary interfaces in the models folder
    - The ObjectReference entity that consists of the ObjectReference interface in the models folder
    - Methods to create, update and delete a Task in the TaskService interface
    - Methods to query the Task with filtering and sorting in the TaskQuery interface
    - Used Exceptions and Enums


- ``pro.taskana.workbasket.api`` provides following:
    - The Workbasket entity that consists of the Workbasket and WorkbasketSummary interfaces in the models folder
    - The WorkbasketAccessItem entity that consists of the WorkbasketAccessItem interface
    - Methods to create, update and delete a Workbasket in the WorkbasketService interface
    - Methods to query the Workbasket with filtering and sorting in the WorkbasketQuery interface
    - Used Exceptions and Enums 


- ``pro.taskana.common.api`` provides following:
    - TaskanaEngine interface that brings all services of Kadai together
    - Other, non entity-related services


- ``pro.taskana.monitor.api`` provides following: 
    - Report models for aggregating data on an entity can be found in the reports folder
    - Reports can be created using ReportBuilders from the report folder. They make filtering of entities included in a Report possible
    - Methods to create ReportBuilder are in the MonitorService interface


- ``pro.taskana.user.api`` provides following: 
    - The User entity that consists of the User interface in the models folder
    - Methods to create, update and delete a User in the UserService interface
    - Used Exceptions 

- ``pro.taskana.spi``: 
    - contains all Service Provider Interfaces (SPIs) of Kadai. An SPI allows the client to change the behavior of Kadai by implementing the SPI. More about SPIs can be found here (link)

## Taskana Entities
All Taskana Entities can be found in the Java API (link). For better readability, they are capitalized in the documentation. 

Taskana operates using Tasks, Classifications and Workbaskets. The entities are stored in the configured database (link). 

 Besides Tasks, Classifications and Workbaskets, there are also interfaces for summary objects: TaskSummaries, ClassificationSummaries and WorkbasketSummaries. Each summary object refers to a full entity, but only contains the most important imformation. For example, a TaskSummary with id 1234 refers to the Task with the id 1234. However, the TaskSummary does not contain the Attachment of the Task as well as some other information.


## Operations on Entities
Kadai provides follwing operations on its entities:
 - create
 - update
 - delete
 - query: allows filtering and sorting entites  by properties

Create, update and delete can be found in the corresponding Services: TaskService, CLassificationService and WorkbasketService. Queries and their filtering/sorting opetions can be found in TaskQuery, CLassificationQuery and WorkbasketQuery.


### How to create an Entity? 

#### Example Task 
1. First create a Task object that is not in the database yet with method 
    ```TaskService.newTask```
2. Then set some properties of that Task via its setter methods.
3. Finally persist this Task to the database via ```TaskSerivce.createTask```

You can find coresponding functions ```WorkbasketService.newWorkbasket```, ```ClassificationService.newClassification```  ```WorkbasketService.createWorkbasket``` and ```ClassificationService.createClassification``` in other Services. They can be used to create other entities.

### How to manipulate an Entity? 
Some properties of an entity can be set via the **entitity interface** (e. g. the Task interface) in the Kadai [Java-API](java-api-usage.md). For example, the method ``  Task.setDescription(String description)`` can be used to set the description of a Task.  However, some properties of entities cannot be set this way. For example, a Workbasket has to be specified during the creation of a Task. You can change the Workbasket by transferring the Task using ``TaskService.transfer(String taskId, String destinationWorkbasketId)``. The state of a Task can only be modified by corresponding TaskService methods ``claim``, ``forceClaim``, ``cancelClaim`` etc. You can read more about the status changes here (link).

### How to integrate the Java API of Kadai?

- Find out the DataSource for your Kadai database. You can read here (link) about setting it up
- Pass the DataSource to the constructor of ``pro.taskana.configuration.TaskanaEngineConfiguration``.
- Build a KadaiEngine using ``TaskanaEngineConfiguration.buildEngine``.

You can use the corresponding Services by getting them with the methods ``TaskanaEngine.getClassificationService``, ``TaskanaEngine.getTaskService`` and ``TaskanaEngine.getWorkbasketService``.
