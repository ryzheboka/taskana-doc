---
sidebar_position: 4
---

# UI Configuration

## Environment Configuration

During startup the TASKANA UI loads the environment information from the URL 

http://{taskana-root}/environments/data-sources/environment-information.json

where {taskana-root} points to the deployment location of TASKANA.

This file contains two parameters:
{
	"taskanaRestUrl": "http://localhost:8080/taskana/api",
	"taskanaLogoutUrl": "http://localhost:8080/taskana"
}

In this case, TASKANA is deployed on localhost, port 8080 using the context root ‘/taskana’.

The REST API is found underneath ‘/api’ which is the default and cannot be changed. Please make sure you use the correct root for the REST API.

## General TASKANA user-defined configuration

There is also the possibility to configuration parameters in the UI. For example, you can let your business administrators configure some behaviour like the routing of tasks or the prioritization.

To configure them, go to “Settings” in the Kadai UI. 

![setting](../static/UISettings.png)

These parameters are saved in the CONFIGURATION table in the data base. The data structure is divided in two parts: The fields with their corresponding values and a field named “schema”. That field contains all information which is needed in the UI to display those parameters. The default object can be found here.

Currently the UI supports the following types of parameters: 

|Type     | What the UI shows                                          |
|---------|------------------------------------------------------------|
|text     |an input field where text can be typed in                   |
|interval |two input fields for numbers, a lower and an upper boundary |
|color    |a color picker                                              |
|json     |a text area where a string in json format can be typed in   |

Those parameters can by administered in the UI by opening the side navigation and selecting “UI Settings”.

## REST API Configuration

The REST Endpoint for the Frontend application can be configured using a JSON file. That JSON file has to be served at /environments/data-sources/environment-information.json and will be loaded on initial request.

The environment-information.json contains two configurations:

| Property         | Description                                |
| -----------------|--------------------------------------------|
| taskanaRestUrl   |The root path of the REST Service. Please note that you have append  /api . Otherwise the Frontend application will not find the REST Service.
| taskanaLogoutUrl |The location a user is redirected to when a logout is triggered.

The default environment-information.json file can be found in our GitHub repository.

## UI Customization

Some TASKANA UI elements, such as custom properties, can be configured using a JSON file. That json file has to be served at /environments/data-sources/taskana-customization.json and will be loaded on initial request.

The default taskana-customization.json will be found in our GitHub repository. 

If you have any questions regarding the UI Customization, please don’t hesitate to contact us.

## How to serve configuration files

There are multiple ways to serve these configuration files. Our example project showcases two:

- Using the /static folder in order to serve a static file. 

- Using a REST Controller in order to serve a static file.

 

Our example project serves the environment-information.json using the /static folder. Here is a link to the repository: 


In our example the taskana-customization.json is served via a REST Controller. This allows further customization. E.g. Based on some environment properties you can serve a different taskana-customization.json. This can be done programmatically within the REST Controller.