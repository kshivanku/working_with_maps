//Initializing the map
var map = L.map('map').setView([40.706213526877455, -74.0044641494751], 15);

var tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
var tile_options = {
  maxZoom : 18
}
var map_layer = L.tileLayer(tile_url, tile_options).addTo(map);

var marker = L.marker([40.706213526877455, -74.0044641494751]).addTo(map);

//Showing a popup wehn user clicks anywhere on the map

map.on('click', showclickpopup);

function showclickpopup(data){
  var popup = L.popup()
              .setLatLng(data.latlng)
              .setContent("You hve clicked: <br />" + data.latlng.toString())
              .openOn(map);
}
