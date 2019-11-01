import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';
// the fromLonLat function
// import {fromLonLat} from 'ol/proj';

// longitude first, then latitude
var bc = [-123.375320, 49.421197];

// layers
var layers = [
  new TileLayer({
        source: new XYZ({
          url: 'http://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        })
      }),
  new TileLayer({
    extent: [-123.469779968262, 49.3335990905762, -123.243202209473, 49.4680480957031],
    source: new TileWMS({
      url: 'http://52.32.75.54:8080/geoserver/cite/wms',
      params: {'LAYERS': 'cite:reefs', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  })
];

// map
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: bc,
    zoom: 10
  })
});
