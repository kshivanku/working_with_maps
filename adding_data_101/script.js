//Initializing Map
var map = L.map('map').setView([40.706213526877455, -74.0044641494751], 15);

var tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
var tile_options = {
  maxZoom: 18
}
var map_layer = L.tileLayer(tile_url,tile_options).addTo(map);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

//Leaflet works directly with geojson data. We'll need omnivore if the data is not in geojson format
L.geoJson(geojsonFeature).addTo(map);
