import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// the fromLonLat function
import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
const bc = [-123.375320, 49.421197];
// since we are using OSM, we have to transform the coordinates...
const bcWebMercator = fromLonLat(bc);

const map = new Map({
  target: 'map',
  layers: [
    // openstreetmap base TileLayer
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: bcWebMercator,
    zoom: 12
  })
});
