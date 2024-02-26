var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MapaRiesgos_1 = new ol.format.GeoJSON();
var features_MapaRiesgos_1 = format_MapaRiesgos_1.readFeatures(json_MapaRiesgos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaRiesgos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaRiesgos_1.addFeatures(features_MapaRiesgos_1);
var lyr_MapaRiesgos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MapaRiesgos_1, 
                style: style_MapaRiesgos_1,
                popuplayertitle: "MapaRiesgos",
                interactive: true,
    title: 'MapaRiesgos<br />\
    <img src="styles/legend/MapaRiesgos_1_0.png" /> RIESGO BAJO<br />\
    <img src="styles/legend/MapaRiesgos_1_1.png" /> RIESGO MEDIO<br />\
    <img src="styles/legend/MapaRiesgos_1_2.png" /> RIESGO ALTO<br />'
        });

lyr_MapaBase_0.setVisible(true);lyr_MapaRiesgos_1.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_MapaRiesgos_1];
lyr_MapaRiesgos_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PonderadoFinal': 'PonderadoFinal', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MapaRiesgos_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PonderadoFinal': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MapaRiesgos_1.set('fieldLabels', {'OBJECTID': 'no label', 'PonderadoFinal': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MapaRiesgos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});