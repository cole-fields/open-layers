import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// the fromLonLat function
import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
const bc = [-119.573568, 49.344938];
// since we are using OSM, we have to transform the coordinates...
const bcWebMercator = fromLonLat(bc);

// base OSM layer
const base = new TileLayer({
  source: new OSM()
});

// reefs WMS layer from geoserver
const reefs = new OpenLayers.Layer.WMS(
  "Layer Reefs",
  "http://34.217.47.31:8080/geoserver/cite/cite",
  {layers: 'cite:reefs'}
);

const map = new Map({
  target: 'map',
  layers: [base, reefs],
  view: new View({
    center: bcWebMercator,
    zoom: 12
  })
});
