import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj'; // the fromLonLat function

const bc = [-119.573568, 49.344938]; // longitude first, then latitude
// since we are using OSM, we have to transform the coordinates...
const bcWebMercator = fromLonLat(bc);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new OpenLayers.Layer.WMS(
      "Layer Reefs",
      "http://34.217.47.31:8080/geoserver/wms/cite",
      {layers: 'cite:reefs'}
    )
  ],
  view: new View({
    center: bcWebMercator,
    zoom: 12
  })
});
