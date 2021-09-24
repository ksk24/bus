// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken =
  `pk.eyJ1IjoiYW1iYXJuaGlsbCIsImEiOiJja3RraTc2d3kxbHd6MnFubXg2NTZpdnZ3In0.0HBCNqtEDzDfoS502HZDbA`;
  
  // TODO: create the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // TODO: add a marker to the map
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
  
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }
  