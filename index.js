import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {bbox as bboxStrategy} from 'ol/loadingstrategy';
import {Stroke, Style} from 'ol/style';
import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
var bc = [-123.375320, 49.421197];
var bcWebMercator = fromLonLat(bc);
// base layer
var base = new TileLayer({
  source: new OSM()
  })
});

// wfs layer pulling from geoserver
var reefSource = new VectorSource({
  format: new GeoJSON(),
  url: function(extent) {
    return 'http://34.217.108.105:8080/geoserver/cite/ows?service=WFS&' +
    'version=1.0.0&request=GetFeature&typeName=cite:reefs&maxFeatures=50&' +
    'outputFormat=application%2Fjson&srsname=EPSG:4326&' +
    'bbox=' + extent.join(',') + ',EPSG:4326';
  },
  strategy: bboxStrategy
});

// define vector layer using VectorSource and define style
var reef = new VectorLayer({
  source: reefSource,
  style: new Style({
    stroke: new Stroke({
      color: 'rgba(0, 0, 255, 1.0)',
      width: 2
    })
  })
});

// map
var map = new Map({
  layers: [base, reef],
  target: 'map',
  view: new View({
    projection: 'EPSG:3857',
    center: bcWebMercator,
    zoom: 11
  })
});
