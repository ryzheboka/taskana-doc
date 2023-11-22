---
sidebar_position: 1
---

import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!../static/core-concepts/task-states.drawio';
import lifecycle from '!!raw-loader!../static/core-concepts/lifecycle.drawio';
import timelineExample from '!!raw-loader!../static/core-concepts/TimelineTask.drawio';
import timelineGeneral from '!!raw-loader!../static/core-concepts/TimelineGeneral.drawio';


# Task Lifecycle

A Task goes through different states during its existence. The states and their transitions are described by the Task Lifecycle. Additionaly, a Task has timestamps for important state transitions and expected milestones in the processing of the Task. In this article, Task Lifecycle and the corresponding Task states are explained in detail.

The following diagram shows Task states and their transitions. You can read more about Task States below.

<Drawio content={lifecycle} />

## Task States

<Drawio content={simpleGraph} />

## Task Timeline

The changes of state and timestamps during the lifetime of a Task can be shown in a timeline. Below is a general timeline of a Task for a common case. It shows how states and timestapts relate to each other, as well as their chronological order. It contains most of the timestamps. For a complete list of timestamps with an explanation, see the text below the diagram.

<Drawio content={timelineGeneral} />

### Task Timestamps

Each Task has different timestamps shown in the timeline above: 
- **received**: Describes when the Task first came into the system. For example, it can be the timestamp of an e-mail contaiting the relevant document. If there is no such timestamp, then the received timestamp can be empty.
- **created**: Describes when the Task was first inserted into the database.
- **planned**: Describes when somebody should start working on the Task.
- **claimed**:  Describes when someone started to work on this Task.
- **due**: Describes the deadline for Task completion.
- **completed**:  Describes when the Task was completed.
- **modified**: Describes when the Task was modified last time. Modifying a Task includes creating, claiming, completing and updating it.

Most of the timestamps are set automatically, including modified, claimed etc.. Some of the timestamps can be also set manually, e. g. received, planned or due. However, the time between planned and due is usually configured to have a fix value using [servicelevel.validation.enforce](../configuration/classificationAndServiceLevel.md). In this case, the time between planned and due is the smallest service level corresponding to the Task. In order to find out the smallest service level of the Task, the service levels of Classification of the Task and the Classification of its Attachment are compared. Then, either due or planned are set accordingly. If both attributes, planned and due, were already set before service level computation, they have to match the correct service level. Else, an exception is thrown.

### Example

Prerequisites:
- Classification *employment contract* with Service Level P7D 
- Classification *contract extension* with Service Level P5D
- [servicelevel.validation.enforce](../configuration/classificationAndServiceLevel.md) is true

Task timeline:
Task *extend contract of Max Mustermann* is mentioned in an e-mail on 01-11-2023 with the deadline on 10-11-2013. *contract Max Mustermann* is a document attached to this e-mail. 
Then, the Task is created next day classified as *contract extension*. Together with the Task, the document *contract Max Mustermann* is inserted into the database as an Attachment of the Task *extend contract of Max Mustermann* with the Attachment classification *employment contract*. The planned timestamp of the Task is computed during the Task creation as following: service Levels of the Attachment and Task are compared. P5D is the smaller of them. That's why P5D is used to compute planned of the Task. Planned is set to 3-11-2023. An employee claims this Task on 06-11-2023. The person completes it on 09-11-2023, one day before the due date.


<Drawio content={timelineExample} />






