---
sidebar_position: 2
---

# Configure Priority Report

Kadai provides the possibility to customize Priority Reports in the UI. To configure it, go to “Settings” in the Kadai UI. 

![setting](../../static/UISettings.png)

These parameters are saved in the CONFIGURATION table in the data base. The data structure is divided in two parts: The fields with their corresponding values and a field named “schema”. That field contains all information which is needed in the UI to display those parameters. The default object can be found here.

Currently the UI supports the following types of parameters: 

|Type     | What the UI shows                                          |
|---------|------------------------------------------------------------|
|text     |an input field where text can be typed in                   |
|interval |two input fields for numbers, a lower and an upper boundary |
|color    |a color picker                                              |
|json     |a text area where a string in json format can be typed in   |

Those parameters can by administered in the UI by opening the side navigation and selecting “UI Settings”.