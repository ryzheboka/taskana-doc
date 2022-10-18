---
sidebar_position: 4
---

# Javadoc Guidelines

!! Rework !!

For the sake of readability and structure we agreed in the “Community of Practice” on consistent rules for our API description: We should document our entire API mandatorily and the internal classes optionally when we consider them important. API classes are inside a package api, internal classes inside internal.

Currently we don’t have a styling rule for method parameter references. We will discuss this in the future, when we’ve tidied up our JavaDoc :slight_smile:  

 

    Class Description

        The first sentence should start with the name of the class.

        The first sentence should be a summary sentence, containing a concise description of the API item. It should rather describe the role of the class than its certain behavior.

        Example: (TaskService)

            “The TaskService creates, deletes and transfers Tasks.” :cross_mark: 

            “The TaskService manages all operations on Tasks.” :check_mark: 

    Enum Description

        The first sentence should be a summary sentence starting with the name of the class.

    Method Description

        The first sentence should describe the intended purpose of the method precisely.

            starts with verb in 3. Person (uppercase)

            ends with dot

            afterwards new paragraph
            Example: 
```

/** 
 * Transfers the specified Task to another Workbasket. <p>
 ```

The inner logic of the method should be described so far that the user knows, which side effects are involved when calling a method. It should describe how the states of the objects are affected by the method. It should not describe every internal detail about the way the method proceeds.      

Example:
/**
 * {@linkplain Task#isTransferred() isTransferred} is set and {@linkplain Task#isRead() isRead} is reset. The {@linkplain Task#getState() state} is set 
 * to {@linkplain TaskState#READY} and the {@linkplain Task#getOwner() owner} to NULL.

Getter should be described using “Returns …” instead of “Gets …”.    

Example:
/**
 * Returns the id of the parent Classification.
 *
 * @return parentId

     */

    Getter that have return value of type boolean should be described using following phrasing:
    i. Returns true if ... or
    ii. Returns whether …

Parameter Description (@param)

    Used for every Parameter passed to a method.

    Example: 

/** 

     * @param taskId the {@linkplain Task#getId() id} of the {@linkplain Task} which should be transferred

        only a phrase

        begins with “the” (lowercase) or with a verb

            The noun followed by “the” should not reference the parameter name.

        ends without dot

        when more information / phrases necessary, divided by a semicolon

    If not setter method: Should add description beyond the API name of the parameter.

    Example: (workbasketKey)

        “the key of the Workbasket” :cross_mark: 

        “the key of the Workbasket the Task should be transferred to” :check_mark: 

Return Value Description (@return)

    Used for every non-void method.

    Example: 

/** 

     * @return the updated {@linkplain Task}

        only a phrase

        begins with “the” / “a” (lowercase)

        ends without dot

        when more information / phrases necessary, divided by a semicolon

        proposal: the return value of a getter consists only of the parameter name, without “the” or “a” in the beginning

Exception Description (@throws)

    Used for every Exception thrown by a method.

        only a phrase

        begins with if (lowercase)

        ends without dot

        when more information / phrases necessary, divided by a semicolon

    Should add description beyond the Exception name.

    Example: (NotAuthorizedException)

        “if the user is not authorized” :cross_mark: 

        “if the user has no transfer permission for the source Workbasket” :check_mark: 

Overloaded & setter Methods (@see)

    Used for overloaded methods when…

        …they are chained

        Example:

default Task transfer(String taskId, String workbasketKey, String domain) {
    return transfer(taskId, workbasketKey, domain, true);

      }

    …the logic of both is identical

    Example:

    transfer by Key and Domain vs. transfer by Id

Used also for setter-methods and referring to the corresponding getter-method.

Explain the method in one phrase as done with all other methods, but leave out further information. Just refer with @see to the called / almost identical method which should describe all necessary information as specified. If the parameters differ, only explain the different ones.

Use the annotation @SuppressWarnings("checkstyle:JavadocMethod") to circumvent Checkstyle.

Example:
/**
 * Transfers a {@linkplain Task} to another {@linkplain Workbasket} while always
 * setting the transfer flag.
 *
 * @see #transfer(String, String, String, boolean)
 */

     @SuppressWarnings("checkstyle:JavadocMethod")

Linking Classes (@linkplain)

    We should link…

         …all our mentioned public API TASKANA classes.

        …fields by their corresponding getter-method.

        …public methods (without additional text).

    Example:

```
/**
 * Transfers the {@linkplain Task} to another {@linkplain Workbasket}. <p>
 * The transfer sets the {@linkplain Task#isTransferred() transfer} flag.
```
We should only link components of our public API. We should not link…

    ...internal classes, e. g. TaskImpl

    ...classes from external libraries, e. g. List, Map or Instant

    ...the class or its attributes itself, e. g. not link the id of the Task in Task

When linking a class while referring to multiple Instances we include the s within the link.
Example:

  /**

       * There can be a huge amount of {@linkplain Task Tasks} the SPI has to handle.

Linking (Entity) Attributes

    When referencing an attribute of a class, we link it to it’s getter-method. The display text of the linked value should match our Entity naming guide, found in 

.

Example:
/**
 * Changes the {@linkplain Task#getClassificationSummary() classificationSummary} of the
 * specified {@linplain Task}.

     * This is a link to a {@linkplain ClassificationSummary#getServiceLevel() serviceLevel} 

Linking Enum values

    When referencing an enum value, we link to the value only. No text should be added to the link.

    Example:

/** 
 * @throws NotAuthorizedException if the current user has no {@linkplain

     *     WorkbasketPermission#READ} for the {@linkplain Workbasket} the {@linkplain Task} is in

     

Spelling and phrasing

    When referencing attributes from their class, use either the description of their content, or their original names.

    Example:

/**
* Returns the externalId of the Task.
*
* @return externalId
*/

'NULL' is written in uppercase 

'id' is written in lowercase, except in the beginning of the sentence

Instant, Map, List and other external classes and data structures are capitalized

Everything else starts with lowercase or uppercase according to English grammar

Use contractions like wasn’t, isn’t and doesn’t (instead of the full versions)