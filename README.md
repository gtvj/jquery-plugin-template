# Set of files to quickly get working on test-driven jQuery plugins.

## What do I mean by jQuery plugin? 
* Any reusable piece of JavaScript code that has a dependency on jQuery
* Extends $.fn to make use of wrapped sets. Note: THIS REPO IS A STARTING POINT FOR CODE THAT WORKS ON WRAPPED SETS (i.e. $.fn.myPlugin - NOT FOR GENERIC JQUERY UTILITIES (i.e. $.myUtility)
* The code is designed for plugins called in the normal way, for example: $('div').myPlugin({ option : value })


## Establishes a number of good practices for writing jQuery plugins: 
* Protection of $ in an IIFE. By this I mean that all plugin code runs within an anonymous function to which the jQuery object is passed, and jQuery is referred internally as $. 
* It opts in to chaining (by returning the wrapped set)
* Supports defaults for plugin options

## Uses: 
* jQuery (obviously) (2.0 and 1.x using conditional comment trick)
* qUnit

## Very minimal
* plugin.htm is the empty page for plugin-template.js HTML etc. Just some markup and target with a jQuery selector in your plugin.
* plugin-template.js is the empty plugin file
* example-plugin.htm is a very simple example. It uses the plugin defined in example-plugin.js
* unit-tests.htm is the test runner
* unit-tests.js is where the tests are (a couple of dummy tests are provided)

There's no scaffolding, CSS etc. included but - if that's needed - this can easily be combined with my responsive-template repository. 