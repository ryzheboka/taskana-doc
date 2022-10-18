---
sidebar_position: 4
---

# End-to-End Tests

!! Check and Rework if needed !!
!! Add screenshots !!

Cypress will automatically generate screenshots of failed tests and videos of the ui during testing. These can be found in taskana/web/cypress/ screenshots|videos respectively.
Executing Tests

Before executing these test please make sure your taskana instance is running. Both options need to be executed in taskana/web.
Option 1: Executing Cypress Headless with Electron
yarn e2e-dev
Option 2: Executing Cypress in Chrome
yarn e2e-dev:open

This will open Cypress in a new window.
The Cypress main window, in the top right a button to run all specs is visible

With this Cypress window you can execute either all tests, or alternativly execute specific test files (i.e. only the classifications.spec.js). This method will automatically repeat the tests, when a file is modified. It also displays executed actions and their consequences using screenshots and a log of actions. This can be helpful when debugging a test or a component.
Picture of the web interface when after running a test

 
Adding Tests

The test files for cypress can be found in taskana/web/cypress/integration/ in their respective folders (this substructure is subject to change). 

To add a test, either add it to already existing test files, when they fit (i.e. add a test, that test classifications to the taskana/web/cypress/integration/classifications/classifications.spec.js file), or add a new test file in its own folder. Remember, that your tests will likely need authentication, which can be added via our custom command (located in taskana/web/cypress/support/commands.js). The following code will login as admin for each test in this context/file. 
beforeEach(() => cy.loginAs('admin'));

Please try to follow the Cypress Best Practises. Please also try to avoid using Angular generated selectors (i.e. “.navbar >>.dropdown > button” instead of “.dropdown > button.ng-tns-c1-0”) remember, that they mostly will need to be unique.

For more Information about Cypress please consult the Cypress documentation
