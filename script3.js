function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 33.8766, lng: -117.9169 },
    });
  
    setMarkers(map);
  }
  
  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  const beaches = [
    ["CSUF", 33.882993, -117.885081, 4],
    ["Fullerton College", 33.876679, -117.916908, 5],
    ["Richman Elementary School", 33.8641814, -117.9333938, 3],
    ["Troy High School", 33.881434,-117.89305, 2],
    ["Fullerton Union High", 33.873985, -117.92205, 1],
  ];
  const school = '<h1 id="firstHeading" class="firstHeading">School</h1>';
  function setMarkers(map) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    const image = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
  
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      
      const infowindow = new google.maps.InfoWindow({
        content: school,
      });
      
      var marker= new google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
      });
    }
  
  
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

  window.initMap = initMap;
  