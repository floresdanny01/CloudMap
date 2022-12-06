function initMap() {
  
  var heatmapData =  [ {location: new google.maps.LatLng(33.882993, -117.885081), weight:(135161/30000)},
  {location: new google.maps.LatLng(33.836111111111116, -117.88972222222223), weight:(336000/30000)},
  {location: new google.maps.LatLng(33.86666666666667, -117.56666666666666), weight:(158391/30000)},
  {location: new google.maps.LatLng(33.92333333333333, -117.8888888888889), weight:(39282/30000)},
  {location: new google.maps.LatLng(33.665, -117.91222222222223), weight:(109960/30000)},
  {location: new google.maps.LatLng(33.85611111111111, -118.00416666666666), weight:(80530/30000)},
  {location: new google.maps.LatLng(33.80305555555555, -117.8325), weight:(136416/30000)},
  {location: new google.maps.LatLng(33.740833333333335, -117.88138888888888), weight:(324528/30000)},
  {location: new google.maps.LatLng(33.68416666666666, -117.7925), weight:(215529/30000)},
  {location: new google.maps.LatLng(33.69277777777778, -118.00027777777778), weight:(197575/30000)},
  
  ];



  var map = new google.maps.Map(document.getElementById("map"), {
    mapId: "40c13ed31879d9c7",
    center: { lat: 33.87, lng: -117.86 },
    zoom: 12,
  });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data : heatmapData,
    map: map,
    radius: 70,
    dissipating: true
  });

 
  document.getElementById("toggle-heatmap")
  .addEventListener("click", toggleHeatmap);

  function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
  }
  
  /* Setting up searchbox autocomplete features*/
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('searchbar'),
    {
      types: ['establishment'],
      compnentRestrictions: { 'country': ['US'] },
      fields: ['place_id', 'geometry', 'name']
    });

  autocomplete.addlistener('place_changed', onPlaceChanged);

  function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // Users search did not return a place; reset the searchbar 
      document.getElementById('autocomplete').placeholder =
        'Enter a place';
    } else {
      // Display the details of the place searched
      document.getElementById('details').innerHTML = place.name;
    }
  }
  

  

}