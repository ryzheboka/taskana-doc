---
sidebar_position: 8
---

# HistoryService

Use Cases for the History Service:


    See history of one business process as a specialist working on a task of that process
        see who worked on it before
        see who transferred it to me
        see what happened in the process before it got assigned to the user
    See all corresponding processes
        belonging to the same parent process id
        belonging to the same customer / contract...
    auditing
        is everything completed?
        what happend to a specific document / process?
        who aprroved what?
        who changed something?
    reporting (SLA/KPI)
        how long took a process/task in average...
        how long did it take until a new message from a customer is assigned to a specialist
        how often was is required to change the classification of the task/document
    reporting
        how many tasks of what classification did we receive this day/week/month?
        how many tasks have been completed by team/location/...?

## Getting Started

!! Screenshots !!

Build the plugin
Taskana history library
./mvnw clean install
REST API
with console:
./mvnw spring-boot:run -P history.plugin -pl :taskana-rest-spring-example-boot
with Intellij:

    Open the Maven tab on the right
    Open the first entry 'Profiles'
    Select the checkbox 'history.plugin'
    Start ExampleRestApplication

REST API will be available: http://localhost:8080/v1/task-history-event