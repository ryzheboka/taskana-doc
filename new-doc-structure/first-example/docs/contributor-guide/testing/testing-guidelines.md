---
sidebar_position: 3
---

# Testing Guidelines

- Instance variables should have no modifiers
- Test classes should have no  modifiers
- Constants have to be private static final
- Use constant MASTER_DOMAIN instead of ""
- Use the test-api only for setting up the test case. Tested behavior should be implemented using the API of TASKANA. 

  Example: If creating a Task is the test case, then use
  ```
  Task task = taskService.newTask(defaultWorkbasketSummary.getId());
  task.setClassificationKey(defaultClassificationSummary.getKey());
  task.setPrimaryObjRef(defaultObjectReference);
  task.setManualPriority(123);
  Task result = taskService.createTask(task);

  !! Use different example !!
  ```

  instead of 
  ```
  Task task = TaskBuilder.newTask()
            .classificationSummary(defaultClassificationSummary)
            .workbasketSummary(defaultWorkbasketSummary)
            .primaryObjRef(defaultObjectReference)

                .manualPriority(123).buildAndStore(taskService);

  !! Use different example !!
  ```

- If possible, getting entities from the database should be avoided by using return values

  Example:
  ```
  Task task = createDefaultTask().manualPriority(123).buildAndStore(taskService);
  task.setManualPriority(42);
  Task result = taskService.updateTask(task);
  ```

  instead of 

  ```
  Task task = createDefaultTask().manualPriority(123).buildAndStore(taskService);
  task.setManualPriority(42);
  taskService.updateTask(task);
  Task result = taskService.getTask(task.getId());
  ```

- Tests must throw Exception.class only
- Use following testclass name pattern: 

    rest: Start with the name of the tested class or description of the tested behavior, end with “IntTest” or “RestDocTest”, e.g. TaskControllerIntTest

    lib: Start with the name of the tested class or description of the tested behavior, end with “AccTest”, e.g. UpdateTaskAccTest
- Use following test name pattern: should_ExpectedBehavior_When_StateUnderTest or should_ExpectedBehavior_For_Situation
    In case it is not possible to name the test with “when” or “for”, it is okay to write should_ExpectedBehaviour. The most important thing is that the name is as understandable as possible.
- Use AssertJ only
- Concatenate the assertions if possible
- Use following syntax: assertThat(testObject).operation
    examples:
    BAD: assertThat(string.contains(“foo”)).isTrue(); 
    GOOD: assertThat(string).contains(“foo”); 
    !! Other examples !!
    Do not use any operation within the assertThat() function that can be replaced with existing functions from AssertJ’s classes.

- extract inside the assertion instead of doing it explicitly:

```
assertThat(events)
    .extracting(WorkbasketHistoryEvent::getEventType)
    .containsExactly(WorkbasketHistoryEventType.DISTRIBUTION_TARGET_ADDED.getName());
```
instead of 
```
type = events.get(0).getEventType();

        assertThat(type).isEqualTo(WorkbasketHistoryEventType.DISTRIBUTION_TARGET_ADDED.getName());
```

- When checking for exceptions in our tests, use one of the following methods:                                                                              

```
Exception expectedException = new Exception(param1, param2, ...);
assertThatThrownBy(() -> classificationService.createClassification(classification))

      .usingRecursiveComparison().isEqualTo(expectedException);
```

```
ThrowingCallable call = () -> classificationService.createClassification(classification);
Exception e = catchThrowableOfType(call, Exception.class);
assertThat(e.getX()).isEqualTo(X);

                assertThat(e.getY()).isEqualTo(Y);
```
!! Different examples

### Rest Tests

!! Rewrite !!
Url and HttpEntity should be extracted. The variables should be named url and auth:
String url = restHelper.toUrl(RestEndpoints.URL_ACCESS_ID)
                + "?search-for=cn=ksc-users,cn=groups,OU=Test,O=TASKANA";
HttpEntity<?> auth = restHelper.defaultRequest();

```
ResponseEntity<List<AccessIdRepresentationModel>> response =
        TEMPLATE.exchange(
            url,
            HttpMethod.GET,
            auth,
            ACCESS_ID_LIST_TYPE);
```
When testing our REST Service, we always use an ObjectMapper instance to convert an Object to a JSON representation. We NEVER create JSON Strings manually.