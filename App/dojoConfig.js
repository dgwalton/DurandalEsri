var dojoConfig = {
    baseUrl: './',
    async: true,
    tlmSiblingOfDojo: true,
    parseOnLoad: false,
    aliases: [['text', 'dojo/text']],
    packages: [
        { name: 'esri', location: '//js.arcgis.com/3.7/js/esri' },
        { name: 'dojo', location: '//js.arcgis.com/3.7/js/dojo/dojo' },
        { name: 'dojox', location: '//js.arcgis.com/3.7/js/dojo/dojox' },
        { name: 'dijit', location: '//js.arcgis.com/3.7/js/dojo/dijit' },
        { name: 'knockout', location: '../Scripts/knockout-2.3.0.debug'},
        { name: 'durandal', location: '../Scripts/durandal' },
        { name: 'plugins', location: '../Scripts/durandal/plugins' },
        { name: 'transitions', location: '../Scripts/durandal/transitions' },
        { name: 'views', location: 'App/views' },
        { name: 'viewmodels', location: 'App/viewmodels' }
    ]
};


