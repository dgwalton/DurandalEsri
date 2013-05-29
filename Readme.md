#Integrating ESRI ArcGIS JavaScript and the Durandal.js framework
Durandal.js relies upon require.js for AMD modular loading. ESRI's ArcGIS JavaScript web 
mapping API leverages dojo.js, and its particular implementation currently requires the 
dojo AMD loader. However, it is possible to integrate the two. This repo contains a simple 
example of a Durandal project with the ESRI ArcGIS API integrated to provide a simple web 
map (baby steps, right?). The key components of this arrangement are as follows:

1. a proper configuration of the dojo AMD loader by means of a dojoConfig.js file loaded before any other libraries.
2. a modified dojo core module to make integration with Durandal possible.

## dojoConfig.js
The content of this file is a js statement constructing a settings object to be picked up from the global namespace
by the dojo AMD loader when it is created. The important pieces of this statement are:

    baseUrl = "./"

the baseUrl tells the dojo loader the default location for loading modules, as well as the relative path for defining packages

    aliases: [['text', 'dojo/text']]

the text plugin is optional in dojo, but required for Durandal, so it is included here

    packages = [...]

all the ESRI, dojo, Durandal, and your custom modules must be rolled up into packages so the loader will know how to load them

## Modified dojo.js

dojo.js is one of the core dojo modules, containing the loader implementation. Durandal leverages
a semi-private require.js API hook that allows Durandal to tag modules and allow for automatic view
location. The dojo loader does not have this feature, so we have to add it. In this example we 
downloaded and modified the minified CDN source from the ESRI CDN, since this allows us to keep using
the CDN to load other ESRI modules. The source (version 3.5) is located 
[here](http://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dojo/dojo.js).

In order to modify this file (which is already done in this repo), you need to save it locally and
search for the string "^require" in the module, and add the middle line below (text is not on separate
lines in the minified source):

    if(/^require\*/.test(_d7.mid)){delete _2f[_d7.mid];} 
    _34("moduleLoaded",[_d7.result,_d7.mid]);
    },_d8=[],

The modified dojo.js file is saved here as App/lib/dojo_mod.js and is loaded in index.html before the 
ESRI CDN source. This arranagement causes an error in the application that can be safely ignored, 
since the CDN source contains the original dojo.js, which tries to create the loader and fails since
the loader already exists.