---
sidebar_position: 1
---

# Overview

The core of taskana is a lightweight java library that manages human tasks.
Taskana depends only to the Java standard edition.
Human tasks in Taskana are organized in Workbaskets.
Workbaskets are the main structure to distribute tasks to the available workers.

The API for taskana is contained in package pro.taskana.
It is structured along the major concepts of taskana:
Tasks, Workbaskets and Classifications.

The major Interfaces are:


Task, TaskSummary, TaskService and TaskQuery
Workbasket, WorkbasketSummary, WorkbasketService and WorkbaketQuery
Classification, ClassificationSummary, ClassificationService and ClassificationQuery

 
What is the purpose of the ...Summary objects?

 

TaskSummaries are returned from task queries.
A TaskSummary can also be created by Task.asSummary().
A TaskSummary cannot be modifed by application code.
The TaskSummary interface is very similar to the Task interface, but it

    does not contain setters for the various properties

    does not contain potentially large properties (LOBs in the Database) like customAttributes and callbackInfo

The same is valid for WorkbasketSummary and ClassificationSummary. In addition, WorkbasketSummary objects and ClassificationSummary objects are contained in Task objects.

 
How to create Task objects?

 

TaskService contains a factory method for Tasks. Creation of a Task is a 3-step operation.

    First create a transient task object with method TaskService.newTask().

    Then set some properties of that task via its setter methods.

    Finally persist this task to the database via TaskSerivce.createTask.
    Corresponding considerations apply to WorkbasketService and Workbasket as well as ClassificationService and Classification.

A Task contains the workbasketSummary for the workbasket it is contained in as well as the ClassificationSummary of the classification it is associated with.

 
How to manipulate a Task, Workbasket or Classification?


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

What to watch out for when contributing?

 

As mentioned above our backend code is written in Java. We now updated to Java 11 but still we have to ensure downward compatibility to Java 8. The reason is that possible users may keep on working with their Java 8 environment. By providing downward compatibility we take care that yet those users stay able to integrate TASKANA without upgrading.

For that reason in our main classes we should only use the Java feature set which is available in jdk8. In our test classes we can additionally implement functionality up to Java 11.
