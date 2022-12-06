let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.87, lng: -117.86 },
    zoom: 6,
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  map.data.setStyle((feature) => {
    const magnitude = feature.getProperty("mag");
    return {
      icon: getTriangle(magnitude),
    };
  });
}

function getTriangle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "red",
    fillOpacity: 0.3,
    scale: Math.pow(2, magnitude) / 1,
    strokeColor: "white",
    strokeWeight: 0.5,
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;

document.getElementById("toggle-heatmap")
  .addEventListener("click", toggleHeatmap);

  
 /* function toggleHeatmap() {
    map.data.setStyle({});
  }
  */