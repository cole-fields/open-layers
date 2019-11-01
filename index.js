import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// the fromLonLat function
import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
var bc = [-123.375320, 49.421197];

// main map variable specifying openstreetmap base in EPSG:4326
var map = new Map({
  target: 'map',
  layers: [
    // openstreetmap base TileLayer
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: bc,
    zoom: 12
  })
});

// specify WMS reefs layer from geoserver
var reefs = new OpenLayers.Layer.WMS(
                "Sponge Reefs", "http://52.32.75.54:8080/geoserver/cite/wms?service=WMS&version=1.1.0&request=GetMap",
                {
                        layers: 'cite:reefs',
                },
                {singleTile: true, ratio: 1}
);

map.addLayer(reefs);
