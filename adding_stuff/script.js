//Initialize the map
var map = L.map('map').setView([40.706213526877455, -74.0044641494751], 15);

//Load the tiles
var tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
var option = {
  maxZoom : 18
}
var maplayer = L.tileLayer(tile_url, option).addTo(map);

//Adding Stuff

//Marker
var marker = L.marker([40.706213526877455, -74.0044641494751]).addTo(map);

//Circle
var circle_options = {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}
var circle = L.circle([40.706213526877455, -74.0044641494751],circle_options).addTo(map);

//Polygon
var poly_coord = [[51.509, -0.08],[51.503, -0.06],[51.51, -0.047]];
var polygon = L.polygon(poly_coord).addTo(map);

//Popup (tied to objects)
marker.bindPopup("Hello, <br />I am a popup");

//Popup (stand alone)
var popup = L.popup()
             .setLatLng([51.5, -0.09])
             .setContent("I am a standalone popup.")
             .openOn(map);
