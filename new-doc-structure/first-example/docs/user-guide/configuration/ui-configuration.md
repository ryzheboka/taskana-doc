---
sidebar_position: 9
---

# UI

## Environment Configuration

The environment information defined below can be configured using the json file `/environments/data-sources/environment-information.json`. The file can for example be placed in the sources of the frontend of your TASKANA application or placed into the resources/static folder of your REST application. It will be loaded on initial request.

The environment-information.json contains two parameters:

| Property         | Description                                |
| -----------------|--------------------------------------------|
| taskanaRestUrl   |The root path of the REST Service. It has to end with "/api"
| taskanaLogoutUrl |The location a user is redirected to when a logout is triggered.

Here is an example:

```
{
	"taskanaRestUrl": "http://localhost:8080/taskana/api",
	"taskanaLogoutUrl": "http://localhost:8080/taskana"
}
```

In this case, TASKANA is deployed on localhost, port 8080 using the context root ‘/taskana’. The default environment-information.json file can be found in our GitHub repository [here](https://github.com/Taskana/taskana/blob/81b28274e77ee412cf85a8e3294f1f2285bdf9fa/web/src/environments/data-sources/environment-information.json#L3).

## UI Customization

Some TASKANA UI elements, such as custom properties, can be configured in the json file `/environments/data-sources/taskana-customization.json`. The file can for example be placed in the sources of the frontend of your TASKANA application or placed into the resources/static folder of your REST application. They will be loaded on initial request.

The default taskana-customization.json will be found in our GitHub repository. 

If you have any questions regarding the UI Customization, please don’t hesitate to [contact us](../../contact-us/intro.md).