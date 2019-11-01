import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {bbox as bboxStrategy} from 'ol/loadingstrategy';

// longitude first, then latitude
var bc = [-123.375320, 49.421197];

// base layer
var base = new TileLayer({
  source: new XYZ({
    url: 'http://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
  })
});
map.addLayer(base);

var reefs = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
    url: function(extent) {
      return 'http://52.32.75.54:8080/geoserver/cite/ows?service=WFS&' +
      'version=1.0.0&request=GetFeature&typeName=cite:reefs&' +
      'maxFeatures=50&outputFormat=json&srsname=EPSG:4326&' +
      'bbox=' + extent.join(',') + ',EPSG:4326';
    },
    strategy: ol.loadingstrategy.bbox
  })
});

// map
var map = new Map({
  layers: [base, reefs],
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: bc,
    zoom: 10
  })
});
