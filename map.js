const busStops = [
    
  ];
  
  mapboxgl.accessToken =
  `pk.eyJ1IjoiYW1iYXJuaGlsbCIsImEiOiJja3RraTc2d3kxbHd6MnFubXg2NTZpdnZ3In0.0HBCNqtEDzDfoS502HZDbA`;
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });

  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  let counter = 0;
  function move() {
 
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }

  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }
  
