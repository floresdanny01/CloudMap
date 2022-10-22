function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "40c13ed31879d9c7",
      center: { lat: 33.87, lng: -117.86 },
      zoom: 12,
    });

    /* Setting up searchbox autocomplete features*/
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('searchbar'),
      {
        types: ['establishment'],
        compnentRestrictions: {'country': ['US']},
        fields: ['place_id', 'geometry', 'name']
      });
    
    autocomplete.addlistener('place_changed', onPlaceChanged);

    function onPlaceChanged(){
      var place = autocomplete.getPlace();
      if (!place.geometry){
        // Users search did not return a place; reset the searchbar 
        document.getElementById('autocomplete').placeholder =
        'Enter a place';
      } else {
        // Display the details of the place searched
        document.getElementById('details').innerHTML = place.name;
      }
    }

  }

