---
sidebar_position: 3
---

# Release instructions

1. Log in into the deployed TASKANA application on bluemix after the last successful master build to do a final quality assurance on the UI. 

2. Generate the list of tickets and commits using the taskana-release-script tool:
Example:7
```
hh@NB161248HH MINGW64 ~/TASKANA/git/taskana (tsk1322)
$ ../taskana-release-script/start.sh TSK v3.1.0   upstream/master
```

3. Generate the release notes, based on the gathered information on the current release page in confluence and the list of commits.

4. Create a release in GitHub

  a) First step is to draft a new release on GitHub: https://github.com/Taskana/taskana/releases. In order to do so, tag the master branch with version like like this: “v1.2.3”

     TASKANA follows the well known versioning convention: First number is the major version. Second number is the minor version for significant changes. The third number is the patch version for small changes and bug fixes.

  b) Please provide a name and a description of the content of the release as well.
    Look at other releases for examples


5. Release the artifacts from OSS Sonatype https://oss.sonatype.org/ to Maven Central. 
 Please log in with the user ... to OSS Nexus. Go to Staging Repositories (on the left). Select the artifact from the list an click on “Release” in the navigation bar above.

!!! More Screenshots !!!