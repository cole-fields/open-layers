import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import DragAndDrop from 'ol/interaction/DragAndDrop';


// longitude first, then latitude
var bc = [-123.375320, 49.421197];

// map
var map = new Map({
  layers: [],
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: bc,
    zoom: 10
  })
});

// base layer
var base = new TileLayer({
  source: new XYZ({
    url: 'http://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
  })
});
map.addLayer(base);

// drag and drop feature
var source = new VectorSource();
var layer = new VectorLayer({
  source: source
});
map.addLayer(layer);

// map drag and drop interaction
map.addInteraction(new DragAndDrop({
  source: source,
  formatConstructors: [GeoJSON]
}));
