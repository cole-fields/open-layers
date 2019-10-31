import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// latlong to web mercator
const lonlat = [-77.036667, 38.895];
const webMercator = fromLonLat(lonlat);

// map 
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: webMercator,
    zoom: 8
  })
});
