define([
    'esri/geometry/Extent',  
    'esri/layers/ArcGISTiledMapServiceLayer',
    'esri/map'
], function (Extent, ArcGISTiledMapServiceLayer, Map) {
    var map;
    var defaultbasemap = window.location.protocol + "//server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
    
    var viewAttached = function () {
        setTimeout(function () {
            var initialExtent = new Extent({
                "xmin": -14706000,
                "ymin": 2542000,
                "xmax": -6488000,
                "ymax": 6568000,
                "spatialReference": { "wkid": 3857 }
            });
            map = new Map("map", {
                extent: initialExtent,
                slider: true,
                autoResize: true
            });
            map.addLayer(new ArcGISTiledMapServiceLayer(defaultbasemap, { id: "basemap" }), 0);
        }, 100);
    };
    
    return {
        viewAttached: viewAttached
    };
});
