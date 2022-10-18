---
sidebar_position: 2
---

# Coding Guidelines - Backend

!! Rework text !!
Variable naming conventions:

    Readability and understandability

If doable, do not use the user admin or taskadmin for any test.

All entities (in JavaDoc, REST doc and comments) start with a capital letter

All attributes (in JavaDoc, REST doc and comments) are written identical to  the variable name (camel + lower case)

All method parameters of type varargs (e. g. String … ids) are in plural

Use code folding whenever it seems appropriate: ```// region <region name> ... // endregion```

In our Service-Interfaces we want to separate methods by CREATE, READ, UPDATE and DELETE.

    If appropriate we want to separate entities first by using code folding then separate by CRUD.

    If one of CREATE, READ, UPDATE or DELETE sections have >= 5 methods then we want to separate methods by using code folding.

We are using Spring Constructor Injection

HTTP Status Code return type: For NotFoundExceptions status code 404 should only be used if the REST API can’t map the client’s URI to a resource. All other cases should use status code 400 - BAD REQUEST

    example: DomainNotFoundException - if the domain does not exist it is an invalid request message parameter which leads to a bad request

We always use method references whenever possible
// good
assertThat(results)
.hasSizeGreaterThan(2)
.extracting(TaskSummary::getWorkbasketSummary)
.extracting(WorkbasketSummary::getId)
.isSortedAccordingTo(CASE_INSENSITIVE_ORDER.reversed());

// not wanted
assertThat(results)
.hasSizeGreaterThan(2)
.extracting(e -> e.getWorkbasketSummary().getId())
.isSortedAccordingTo(CASE_INSENSITIVE_ORDER.reversed());

 

We never want String constants for Exception messages or logging statements. We prefer to duplicate those messages here because of code readability

We don’t enforce types in our lambda statements: (sortBy, sortDirection) -> {} instead of (String sortBy, SortDirection sortDirection) -> {}

We prefer String.format() over String concatinations if the code is not constantly executed. However, we don’t want to use String.format() in logging statements.

We want to use Default Methods in Interfaces, if methods are overlapping

We want to use the annotation ContructorProperties  instead of an empty private constructor for initialization of models by jackson/spring.

We don’t want to use curly braces in ThrowingCallable lambda expressions

For Map variables, we use the valueByKey naming convention

How to write TASKANA specific words:

    Entities: Camel case, exactly the class name
    e.g. WorkbasketAccessItem → WorkbasketAccessItem

    Short names are valid if unambigous

    Variable names should be unambigous

Use quotes when writing values of variables in String.format() and logging messages:

    e.g. Task with id '152' instead of Task with id 152

In lambda expression we only use curly braces when it can not be avoided.

According to SlF4J FAQ, the debug message will only be formatted if debug is enabled. An additional check using if (LOGGER.isDebugEnabled()) is not necessary.

We want to replace Thread.sleep with the help of Awaitility whenever it is possible.

- Implement toString() method in entities
