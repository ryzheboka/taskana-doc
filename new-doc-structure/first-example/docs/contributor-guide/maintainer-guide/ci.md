---
sidebar_position: 2
---

# Continious Integration

## Overview:

  - Reference to out .yml file
  - !! Diagramm for Taskana and for Adapter!! not there yet

### Workflow triggers

  - git push (except on dependabot branches)
  - merging branch into master
  - creation of a version tag
  - rerun jobs button on Github

## Secrets on Organization Level

| Name                        | Description                                      | Used for                                                                                                                                                 |
|-----------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| GH_EMAIL                    | the github email address (defined in git config) | This  configuration (e-mail & username) is used as author for the commit  in which the pom’s are updated to the next SNAPSHOT version after a  release.  |
| GH_USERNAME                 | the gitub user name (defined in git config)      |                                                                                                                                                          |
| GPG_KEY                     | the gpg private key encoded in base64            | This key is used to sign our artifacts when deploying to OSS Sonatype                                                                                    |
| GPG_KEY_NAME                | the e-mail address of the gpg key                |                                                                                                                                                          |
| GPG_PASSPHRASE              | password for the gpg key                         |                                                                                                                                                          |
| OSSRH_JIRA_USERNAME         | username for OSS Sonatype                        | Credentials used to authenticate against OSS Sonatype during release                                                                                     |
| OSSRH_JIRA_PASSWORD         | password for OSS Sonatype                        |                                                                                                                                                          |
| SONAR_ORGANIZATION          | the sonarcloud organization                      | Used to identify the sonarcloud organization during SonarQube analysis upload                                                                            |
| SONAR_TOKEN                 | the authentication token for sonarcloud          | Used to authenticate during SonarQube analysis upload                                                                                                    |
| ADMIN_PERSONAL_ACCESS_TOKEN | the PAT of an organization admin                 | Used  to A) avoid the branch restriction and B) force Github Actions to build  a workflow when the dependencies for a release build update.              |

## Secrets on Repository Level of TASKANA

| Name               | Description                    | Used for                                                                 |
|--------------------|--------------------------------|--------------------------------------------------------------------------|
| SONAR_PROJECT_KEY  | the sonarcloud project key     | Used to identify the sonarcloud project during SonarQube analysis upload |
| IBM_CLOUD_API_KEY  | the api key                    | Used to upload taskana-rest-spring-example-boot to IBM Cloud Foundry     |
| IBM_CLOUD_CF_API   | the Cloud Foundry api          |                                                                          |
| IBM_CLOUD_CF_ORG   | the Cloud Foundry organization |                                                                          |
| IBM_CLOUD_CF_SPACE | the Cloud Foundry space        |                                                                          |

## Secrets on Repository Level of Adapter
| Name              | Description                | Used for                                                                 |
|-------------------|----------------------------|--------------------------------------------------------------------------|
| SONAR_PROJECT_KEY | the sonarcloud project key | Used to identify the sonarcloud project during SonarQube analysis upload |
