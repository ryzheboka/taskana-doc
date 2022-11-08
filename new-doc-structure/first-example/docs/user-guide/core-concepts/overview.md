---
sidebar_position: 1
---

# Overview

import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!./task-states.drawio';
import entities from '!!raw-loader!./entities.drawio';
import architecture from '!!raw-loader!./architecture.drawio';

Taskana manages human tasks. This includes defining the tasks, distributing them to the corresponding workers and keeping track of the task execution. Taskana also offers options for customizing each task with attachments, object references etc.. In the following article, the basic entities of Taskana and related concepts are explained. 

In order to prvide its functionality, TASKANA consists of different components. They are shown in the diagram below. You can read more about the Java Library and its usage [here](../java-api-usage). 

<Drawio content={architecture} />

## Taskana Entities
All Taskana Entities can be found in the Java API. You can read more about our Java API [here](../java-api-usage.md). For better readability, entites are capitalized in the documentation. 

Taskana operates using Tasks, Classifications and Workbaskets. Additional entities are Attachments, ObjectReferences and WorkbasketAccessIds. The entities are stored in the [configured database] (../configuration/database-configuration.md). You can see the detailed data model here (link).

<Drawio content={entities} />


### Task

The Task interface can be found in (path to Task). It represents a human task that should be perfomed by one of the relevant users. A Task is identified by unique id that is generated upon Task creation. 

Each Task has exactly one Classification. This Classification determines some properties of the Task. For example, you can prioritize Tasks differently by using different Classifications. The Task is assigned to exactly one Workbasket so that different users have access to different Tasks. 

!! Diagramm fürs Verhältnis zwischen Tasks, Workbaskets und Classifications !! 

In order to enable the Task lifecycle, the Task has a state. For example, after a Task has been created, it's in state READY. Following diagramm describes the states of a Task.  

<Drawio content={simpleGraph} />

### Object Reference
ObjectReference refers to document or some other real world object that the Task is about. The document is identified by the value field of ObjectReference. Each Task must have one primary ObjectReference. The primary ObjectReference defines the main involved document. A Task can have several secundary ObjectReferences that are also relevant for the Task.


### Attachment
An Attachment ??? 

### Classification

The Classification interface can be found in (path to Classification). It represents a category of Tasks. The Tasks with the same Classification have some common attributes. For example, the due date and priority of a Task is computed using its Classification. A Classification can be identified either by an id or by the (key, domain) pair. There can be mutliple Classification with the same key but different domains. However, for each key, there is a master Classification. A master Classification has a domain value "" (empty String). If a Classification is not found in a given domain, then the master Classification with the same key is returned. The successfull deletion of the master Classification means the deletion of all Classifications with that key.

### Workbasket

The Workbasket interface can be found in (). A Workbasket is a list of Tasks. Each user has access to a set of Workbaskets. For example, each team member has access to the Workbasket of the team. Workbasket can be identified either by an id or by the (key, domain) pair. There can be mutliple workbaskets with the same key but different domains. 

There different forms of access to a Workbasket. You can read more about permissions [here](./security-permissions#access-to-workbaskets.md).

The Workbasket for a specific Task can be chosen differently. For example, there is the Task Routing feature. Task Routing allows to implement custom logic for determining the Workbasket for a Task. 

### WorkbasketAccessItem

A WorkbasketAccessItem specifies permissions for a given Workbasket and a specific user or group. You can read more about different permissions [here](./security-permissions.md#access-to-workbaskets). There is also an [example table](./security-permissions.md#example-workbasketaccesitem-table) containing WorkbasketAccessItems. 

## Operations on entites

- Create, Update, Delete
- Query