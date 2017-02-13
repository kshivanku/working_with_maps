var map = L.map('map').setView([40.706213526877455, -74.0044641494751], 15);

var tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
var option = {
  maxZoom : 18
}
var maplayer = L.tileLayer(tile_url, option).addTo(map);

//Using Omnivore
omnivore.geojson('places.geojson').addTo(map);

//Using ajax
// $.ajax({
//   dataType : "json",
//   url : "places.geojson",
//   success: function(data){
//     L.geoJson(data).addTo(map);
//   }
// });
