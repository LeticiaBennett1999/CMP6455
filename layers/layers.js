var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SaltLakeCountyBoundary_1 = new ol.format.GeoJSON();
var features_SaltLakeCountyBoundary_1 = format_SaltLakeCountyBoundary_1.readFeatures(json_SaltLakeCountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLakeCountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLakeCountyBoundary_1.addFeatures(features_SaltLakeCountyBoundary_1);
var lyr_SaltLakeCountyBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SaltLakeCountyBoundary_1, 
                style: style_SaltLakeCountyBoundary_1,
                interactive: true,
                title: '<img src="styles/legend/SaltLakeCountyBoundary_1.png" /> Salt Lake County Boundary'
            });
var format_SaltLakeCountyCensusTracts_2 = new ol.format.GeoJSON();
var features_SaltLakeCountyCensusTracts_2 = format_SaltLakeCountyCensusTracts_2.readFeatures(json_SaltLakeCountyCensusTracts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLakeCountyCensusTracts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLakeCountyCensusTracts_2.addFeatures(features_SaltLakeCountyCensusTracts_2);
var lyr_SaltLakeCountyCensusTracts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SaltLakeCountyCensusTracts_2, 
                style: style_SaltLakeCountyCensusTracts_2,
                interactive: true,
                title: '<img src="styles/legend/SaltLakeCountyCensusTracts_2.png" /> Salt Lake County Census Tracts'
            });
var format_2018Crashes_3 = new ol.format.GeoJSON();
var features_2018Crashes_3 = format_2018Crashes_3.readFeatures(json_2018Crashes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018Crashes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018Crashes_3.addFeatures(features_2018Crashes_3);
var lyr_2018Crashes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018Crashes_3, 
                style: style_2018Crashes_3,
                interactive: true,
                title: '<img src="styles/legend/2018Crashes_3.png" /> 2018 Crashes'
            });
var format_2017Crashes_4 = new ol.format.GeoJSON();
var features_2017Crashes_4 = format_2017Crashes_4.readFeatures(json_2017Crashes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017Crashes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017Crashes_4.addFeatures(features_2017Crashes_4);
var lyr_2017Crashes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017Crashes_4, 
                style: style_2017Crashes_4,
                interactive: true,
                title: '<img src="styles/legend/2017Crashes_4.png" /> 2017 Crashes'
            });
var format_2016Crashes_5 = new ol.format.GeoJSON();
var features_2016Crashes_5 = format_2016Crashes_5.readFeatures(json_2016Crashes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016Crashes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016Crashes_5.addFeatures(features_2016Crashes_5);
var lyr_2016Crashes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016Crashes_5, 
                style: style_2016Crashes_5,
                interactive: true,
                title: '<img src="styles/legend/2016Crashes_5.png" /> 2016 Crashes'
            });
var format_2015Crashes_6 = new ol.format.GeoJSON();
var features_2015Crashes_6 = format_2015Crashes_6.readFeatures(json_2015Crashes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015Crashes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015Crashes_6.addFeatures(features_2015Crashes_6);
var lyr_2015Crashes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015Crashes_6, 
                style: style_2015Crashes_6,
                interactive: true,
                title: '<img src="styles/legend/2015Crashes_6.png" /> 2015 Crashes'
            });

lyr__0.setVisible(true);lyr_SaltLakeCountyBoundary_1.setVisible(true);lyr_SaltLakeCountyCensusTracts_2.setVisible(true);lyr_2018Crashes_3.setVisible(true);lyr_2017Crashes_4.setVisible(true);lyr_2016Crashes_5.setVisible(true);lyr_2015Crashes_6.setVisible(true);
var layersList = [lyr__0,lyr_SaltLakeCountyBoundary_1,lyr_SaltLakeCountyCensusTracts_2,lyr_2018Crashes_3,lyr_2017Crashes_4,lyr_2016Crashes_5,lyr_2015Crashes_6];
lyr_SaltLakeCountyBoundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SaltLakeCountyCensusTracts_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'FUNCSTAT10': 'FUNCSTAT10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LOGRECNO': 'LOGRECNO', 'AREALAND': 'AREALAND', 'AREAWATR': 'AREAWATR', 'POP100': 'POP100', 'HU100': 'HU100', 'P0020001': 'P0020001', 'P0020002': 'P0020002', 'P0020003': 'P0020003', 'P0020004': 'P0020004', 'P0020005': 'P0020005', 'P0020006': 'P0020006', 'P0020007': 'P0020007', 'P0020008': 'P0020008', 'P0020009': 'P0020009', 'P0020010': 'P0020010', 'MTFCC': 'MTFCC', 'P0010011': 'P0010011', 'P0010012': 'P0010012', 'P0010013': 'P0010013', 'P0010014': 'P0010014', 'SqMiles': 'SqMiles', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2018Crashes_3.set('fieldAliases', {'YEAR': 'YEAR', 'OBJECTID': 'OBJECTID', });
lyr_2017Crashes_4.set('fieldAliases', {'YEAR': 'YEAR', 'OBJECTID': 'OBJECTID', });
lyr_2016Crashes_5.set('fieldAliases', {'YEAR': 'YEAR', 'OBJECTID': 'OBJECTID', });
lyr_2015Crashes_6.set('fieldAliases', {'YEAR': 'YEAR', 'OBJECTID': 'OBJECTID', });
lyr_SaltLakeCountyBoundary_1.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SaltLakeCountyCensusTracts_2.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'TRACTCE10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LOGRECNO': 'TextEdit', 'AREALAND': 'TextEdit', 'AREAWATR': 'TextEdit', 'POP100': 'TextEdit', 'HU100': 'TextEdit', 'P0020001': 'TextEdit', 'P0020002': 'TextEdit', 'P0020003': 'TextEdit', 'P0020004': 'TextEdit', 'P0020005': 'TextEdit', 'P0020006': 'TextEdit', 'P0020007': 'TextEdit', 'P0020008': 'TextEdit', 'P0020009': 'TextEdit', 'P0020010': 'TextEdit', 'MTFCC': 'TextEdit', 'P0010011': 'Range', 'P0010012': 'Range', 'P0010013': 'Range', 'P0010014': 'Range', 'SqMiles': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2018Crashes_3.set('fieldImages', {'YEAR': '', 'OBJECTID': '', });
lyr_2017Crashes_4.set('fieldImages', {'YEAR': '', 'OBJECTID': '', });
lyr_2016Crashes_5.set('fieldImages', {'YEAR': '', 'OBJECTID': '', });
lyr_2015Crashes_6.set('fieldImages', {'YEAR': '', 'OBJECTID': '', });
lyr_SaltLakeCountyBoundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SaltLakeCountyCensusTracts_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'TRACTCE10': 'no label', 'GEOID10': 'no label', 'NAME10': 'no label', 'FUNCSTAT10': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'LOGRECNO': 'no label', 'AREALAND': 'no label', 'AREAWATR': 'no label', 'POP100': 'no label', 'HU100': 'no label', 'P0020001': 'no label', 'P0020002': 'no label', 'P0020003': 'no label', 'P0020004': 'no label', 'P0020005': 'no label', 'P0020006': 'no label', 'P0020007': 'no label', 'P0020008': 'no label', 'P0020009': 'no label', 'P0020010': 'no label', 'MTFCC': 'no label', 'P0010011': 'no label', 'P0010012': 'no label', 'P0010013': 'no label', 'P0010014': 'no label', 'SqMiles': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_2018Crashes_3.set('fieldLabels', {'YEAR': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', });
lyr_2017Crashes_4.set('fieldLabels', {'YEAR': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', });
lyr_2016Crashes_5.set('fieldLabels', {'YEAR': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', });
lyr_2015Crashes_6.set('fieldLabels', {'YEAR': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', });
lyr_2015Crashes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});