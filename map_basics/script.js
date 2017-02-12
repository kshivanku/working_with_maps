//Initializing Map
var map = L.map('map');
map.setView([40.706213526877455, -74.0044641494751], 15);

//Loading map tiles
var tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
var options= {
  maxZoom: 18
}
L.tileLayer(tile_url,options).addTo(map);
