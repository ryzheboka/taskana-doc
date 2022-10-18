---
sidebar_position: 1
---

# Contributing to TASKANA

## Workflow
!! Text should be reworked !!

If your change is non trivial then we ask you to create an issue (=ticket) in JIRA first (if none exists). Trivial changes can be made without an issue.

The following workflow applies to issues:

    Start working on an issue:

        move the issue to state "In Progress"

        assign it to yourself

    Finish your work

        comment your change (e.g. link the pull request)

        remove the assignment

        move the issue to state "Review needed"

    Review (done by some-one else)

        assign the issue to yourself

        comment the successful review / your findings

        OK: move the issue to state "Done" and re-assign it to the original author

        Findings: move the ticket to state "Review failed" and re-assign it to the original author

### The ticket is done when ...
  -Source code is checked in Git
  -Source code is reviewed by another developer
  -Source code is well-structered and understandable
  -Logging is implemented and allows to identify/analyze production problems
  -Automatic tests are existing and do test the important parts of the code
  -ALL tests run successfully
  -TASKANA is successfully built and deployed
  -Story is reviewed and accepted by the product owner
  -Documentation is up-to-date

## Creating a Pull Request
Preparations before Starting
Understanding the Git basics

Not sure what a pull request is, or how to submit one? Take a look at GitHub's excellent documentation at https://help.github.com/articles/about-pull-requests/ and https://help.github.com/en/articles/creating-a-pull-request first.

To create a pull request, please refer to GIT basic, which gives a detailed description of the commands needed.
Configure Git to use real name in commits

Please configure git to use your real first and last name and your git noreply email adress for any commits you intend to submit as pull requests, e.g.
Author: First Last <your_account@users.noreply.github.com>

You can configure this globally with:
```
git config --global user.name "John Doe"
git config --global user.email john_does_github_account@users.noreply.github.com
```

These settings will be written to ~/.gitconfig on Unix and %APPDATA%\.gitconfig on Windows, see https://help.github.com/articles/set-up-git/ 

Alternatively, you can configure this locally for the taskana repository only by omitting the `--global` flag:
```
cd taskana
git config user.name "John Doe"
git config user.email john_does_github_account@users.noreply.github.com
```
 
Where to find my github noreply email

Go to Settings→Email in your account. Under "Keep my email addresses private" you can find the no reply email with your specific account. Also be sure to set this check box and the  check box "Block command line pushes that expose my mail" also to avoid check ins with email other than the noreply address.

 
Pull Request Pipeline

Each change to the master branch is done by a pull request (PR). A PR has to be reviewed and approved by one or many reviewers before merging into production code.  A submitter is a person who creates the pull request. A reviewer is a person who will approve or decline the pull request at its current state.  A merger is a person who finally integrates the PR into the master branch.
Our definition of a good pull request

    Single responsibility → split PR if possible 

    Preferring small PRs

    No unneeded changes (like different formatting, makes hard to read the diff)

    Comment on important reasons of “why this changes” on the PR  (not the code itself)

    Solve merge conflicts (may also happen after PR is created)

    Leave code a little better than you checked it out

Before creating a pull request

    Run all tests, verify checkstyle

    Format your commit messages in the following way:

        Prefix Git commit messages with the ticket number, e.g. "TSK-140: xyz"

        Describe why you are making the change, e.g. "TSK-140: Added logback to suppress the debug messages during maven build" (not only "changed logging")

    Review your diff & changes → be happy or rework your PR

    Remove unneeded changes to make the review simpler

    Don’t use a ticket again if the ticket is already part of a release

When creating a pull request

Answer to the auto-comment bot’s checklist

In case it’s necessary, update the documentation

Include link of sonarcloud branch analysis in pull requests, see 

 for installation details

In case the PR contains important changes and needs additional explanation besides the commit message, add a description of the changes in the current release notes: 
 or 

     

    Put your ticket in review

After approval

    The submitter merges his PR, not the reviewer

    If PR is changed after approval, approval is removed

After the merge

    After successful integration of a pull request, verify bluemix test environment is not broken

    The merger puts the ticket to “integrated”

 
Git Command Pipeline

The Git infrastructure is set up as follows:

    The upstream repository contains the taskana repository on Github

    The origin repository contains your private repository on Github

    The local repository contains your private repository locally.

If you start to work on a new ticket, you first go to your local repository in the master branch:
```git checkout master```

Then, bring this branch in sync with the upstream (i.e. taskana) master branch:
```
git fetch --all
git rebase upstream/master
```

Then, bring your private remote master branch (origin) in sync:
```git push origin master```

Now, create your new branch that contains your work:
```git checkout -b <branchname> master```

Now, do your development work, stage modified, deleted and new files and commit locally.

Now, push your local branch into your remote private repository.
```git push origin <branchname>```

This creates a new branch in your remote private Github repository. From there, create a pull request against the taskana repository on Github.
