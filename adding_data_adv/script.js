var map = L.map('map').setView([40.706213526877455, -74.0044641494751], 15);
tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
L.tileLayer(tile_url).addTo(map);

//Here I am using omnivore, but I could have also used ajax to get data from external file and used that in L.geojson(data,{options}).addTo(map);
var customLayer = L.geoJson(null, {
    filter: function(data){
      return data.properties.activities[0].activity == "walking"
    },
    style: {
      "color": "#000000",
      "opacity": "0.5"
    }
});
omnivore.geojson('activities.geojson', null, customLayer).addTo(map);


//Adding points data
var placeLayer = L.geoJson(null,{
  onEachFeature: function(feature,layer){
    layer.bindPopup(feature.properties.place.name);
  }
})
omnivore.geojson('places.geojson',null,placeLayer).addTo(map);
