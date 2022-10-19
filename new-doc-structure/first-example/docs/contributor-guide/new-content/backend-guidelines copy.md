---
sidebar_position: 5
---

# Using Logging

Logging should enable operators, system administrators and developers to identify what the system has done, is doing as well as identifying and fixing problems. The system should provide sufficient log data with the benefit of meaningful analysis, but not too much that the performance would be affected significantly during normal operations.

In production, the used log level should usually be WARNING or ERROR. With this level, it must be possible to see important problems in the logs. Performance must not be affected significantly.

In case of problems, when the system runs in 'analysis' mode (log level DEBUG), a certain performance impact may be tolerated, but probably not more than 20-30%.

Therefore, log entries should be judiciously according to the following guidelines.
Use appropriate severity levels.
Use log levels as follows

| Loglevel | Usage                                                                                                                                                                                                      | Examples                                                                                                                                                                                                                               |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TRACE    | For detailed failure and control flow analysis                                                                                                                                                             | performance behaviour                                                                                                                                                                                                                  |
| DEBUG    | All relevant details needed to understand control flow                                                                                                                                                     | Info about method entry and exit Details to method parameters Entry into entry points of interfaces Calls to Databases, APIs or services Modification of internal state as e.g. a Task was created, claimed, transferred or completed. |
| INFO     | All relevant details needed to understand the state of the system                                                                                                                                          | Lifecycle events like start of the application Configuration details Informational messages about e.g. background tasks and processes.                                                                                                 |
| WARNING  | Unexpected  or unwanted behaviour that is not necessarily wrong, but indicates  potential problems. Perhaps the customer has already noted "something  that should be investigated first in the morning".  | Unexpected high latency when calling a database or service Service call works only at the second attempt Uncritical data that contain errors                                                                                           |
| ERROR    | Erroneous  behaviour of the system and permanent problems. Something failed and  the system has no workarounds. The customer has certainly noticed  something. "It is 2 a.m. and somewhere rings a phone". | Database not reachable Service permanently not reachable Unhandled exceptions in the programs control flow                                                                                                                             |

Log every API call with level DEBUG !! Is it still valid ?? !!

Log method entry and exit as well as arguments and return values for every top level API call.

    Log database interactions with level DEBUG.

    In DEBUG mode, MyBatis logs sql-statements, replacement parameters and the number of replies, not the returned content.

    Therefore, we should log the fact that we call MyBatis as well as the value(s) of the result received.

    Write additional log entries with common sense

    The log should contain sufficient data to be able to identify the flow of control and data through the system, but not too many to impact performance too much.

    Avoid common pitfalls

    Avoid String concatenations in log expressions

    Avoid complicated expressions in log statements (e.g. chained method calls) - they have the potential for NullPointerExceptions.

Avoid huge data sizes in log statements - they may slow down the system too much.

Avoid the catch - log - throw pattern.

If you rethrow an exception it will probably be logged somewhere on its way out. If you log it also, the log will be full of duplicate exceptions.

Exceptions should be logged (including the call stack) with level ERROR or WARNING if they are caught and swallowed.

The correct syntax to log an exception including its stack is

    LOGGER.error("Error doing something ", e);

    If we create and throw an exception, a log record should be written (w/o Exception stack) indicating the reason for the exception.

    Logging an exception without stack is done via

    LOGGER.error("Throwing exception {} because something bad happened", e.getClass().getName());


    Avoid print just the cause of the exception getCause() or the message getMessage(). We should send the whole exception.