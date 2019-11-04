import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
var bc = [-123.375320, 49.421197];
var bcWebMercator = fromLonLat(bc);

// base layer
var base = new TileLayer({
  source: new OSM()
});

var wmsSource = new ImageWMS({
  url: 'https://ahocevar.com/geoserver/wms',
  params: {'LAYERS': 'cite:reefs'},
  serverType: 'geoserver'
});

var reef = new ImageLayer({
  source: wmsSource
});

// map
var map = new Map({
  layers: [base, reef],
  target: 'map',
  view: new View({
    projection: 'EPSG:3857',
    center: bcWebMercator,
    zoom: 10
  })
});
