var dojoConfig = {
    baseUrl: './',
    async: true,
    tlmSiblingOfDojo: true,
    parseOnLoad: false,
    aliases: [['text', 'dojo/text']],
    packages: [
        { name: 'esri', location: '//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri' },
        { name: 'dojo', location: '//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dojo' },
        { name: 'dojox', location: '//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dojox' },
        { name: 'dijit', location: '//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dijit' },
        { name: 'durandal', location: 'App/durandal' },
        { name: 'views', location: 'App/views' },
        { name: 'viewmodels', location: 'App/viewmodels' }
    ]
};


