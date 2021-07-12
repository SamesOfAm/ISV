// Open Layers Karte initialisieren

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([11.327722, 50.980500]),
        zoom: 16
    })
});