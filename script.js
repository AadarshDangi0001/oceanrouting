// Preset routes
const routes = {
    india_south_america: [
        [76.74877, 10.41412], 
[75.10653, 9.22536], 
[74.10439, 8.78106],
        [68.01208, 6.98607], 
[68.01208, 6.98607], 
[62.08531, 3.03311], 
[60.39396, 2.31219], 
[57.63595, 1.1746], 
[55.66668, -0.99888], 
[54.15573, -3.3501], 
[52.25983, -5.73916], 
[50.60455, -7.5039], 
[49.11164, -9.61891], 
[46.74168, -11.63907], 
[44.81403, -13.76994], 
[43.11508, -15.80137], 
[41.63175, -17.94167], 
[39.64705, -20.5725], 
[37.36946, -23.37261], 
[35.16065, -26.50676], 
[32.31798, -30.12333], 
[27.83041, -33.4648], 
[22.9138, -34.79838], 
[17.93141, -34.6145], 
[14.06563, -33.58371], 
[10.17522, -32.34552], 
[6.48378, -31.03056], 
[1.93322, -29.09886], 
[-2.38509, -27.10958], 
[-10.38532, -25.39792], 
[-14.76092, -23.57753], 
[-19.44921, -20.50243], 
[-22.85015, -17.51946], 
[-27.20505, -14.3128], 
[-30.04406, -11.90057], 
[-31.09328, -10.55392], 
[-32.68293, -8.9295], 
[-34.11367, -8.0748], 
[-34.81361, -7.65898], 
[-35.02491, -7.60365] // South America (Brazil)
    ],
    india_australia: [
      [78.9629, 20.5937], // India
      [80.0000, 10.0000], // Indian Ocean
      [90.0000, -10.0000], // Indian Ocean
      [110.0000, -20.0000], // Indian Ocean
      [120.0000, -25.0000], // Near Australia
      [151.2093, -33.8688] // Sydney, Australia
    ],
    india_africa: [
      [78.9629, 20.5937], // India
      [70.0000, 15.0000], // Arabian Sea
      [50.0000, 0.0000],  // Indian Ocean
      [40.0000, -10.0000], // Indian Ocean
      [30.0000, -20.0000], // Indian Ocean
      [20.0000, -30.0000], // Near Africa
      [30.0000, -25.0000]  // South Africa
    ],
    india_europe: [
    [103.75885, 1.28365],
  
    [103.55959, 1.21515],
   
    [103.34357, 1.32358],
    [103.30107, 1.34871],
    [103.2527, 1.37846],
    [103.19829, 1.41284],
    [103.151, 1.44532],
    [103.09121, 1.48036],
    [103.03766, 1.51686],
    [102.98918, 1.54696],
    [102.94292, 1.57755],
    [102.85934, 1.62942],
    [102.75603, 1.68923],
    [102.64914, 1.75472],
    [102.54289, 1.82078],
    [102.42152, 1.8983],
    [102.26593, 1.98365],
    [102.13091, 2.06989],
    [101.99445, 2.15241],
    [101.87176, 2.23746],
    [101.71106, 2.35219],
    [101.55542, 2.4919],
    [101.33231, 2.65811],
    [101.16158, 2.80447],
    [100.98539, 2.94452],
    [100.76463, 3.10435],
    [100.55379, 3.27058],
    [100.32831, 3.44686],
    [100.04129, 3.67241],
    [99.74579, 3.89891],
    [99.35054, 4.19991],
    [98.99202, 4.48776],
    [98.69765, 4.72566],
    [98.03636, 5.22468],
    [97.45251, 5.64606],
    [96.57533, 5.86714],
    [95.62635, 6.11504],
    [94.90079, 6.27731],
    [93.8811, 6.22488],
    [93.01292, 6.18938],
    [91.71557, 6.12127],
    [90.5278, 6.05583],
    [88.64524, 5.92477],
    [87.07231, 5.85461],
    [85.2439, 5.64386],
    [83.29157, 5.51223],
    [81.18935, 5.44672],
    [78.84034, 6.02596],
    [76.78165, 6.46796],
    [74.44601, 7.30005],
    [72.40518, 7.9575],
    [70.10104, 8.57466],
    [68.31085, 9.16898],
    [64.17995, 10.36121],
    [59.8974, 11.72428],
    [55.68951, 12.86117],
    [51.20718, 13.92437],
    [47.14048, 12.8173],
    [43.27103, 12.78758],
    [40.50233, 16.88358],
    [38.29835, 20.62849],
    [36.25278, 24.37146],
    [34.06262, 27.67758],
    [32.05067, 30.6417],
    [29.37944, 32.10471],
    [24.95749, 33.37343],
    [19.87368, 34.82726],
    [15.09743, 36.01957],
    [9.48185, 37.14899],
    [3.39961, 37.38752],
    [-2.56692, 36.35376],
    [-8.62093, 36.71195],
    [-9.50484, 40.24293],
    [-9.24946, 44.06484],
    [-6.0572, 48.19516],
    [-0.43882, 50.15599]// London, Europe
    ]
  };
  
  // Initialize the map
  const map = L.map('map').setView([0, 0], 2);
  
  // Add MapTiler tiles
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YucvbolmP8WJeXxZK3eL', {
    attribution: '© MapTiler © OpenStreetMap contributors'
  }).addTo(map);
  
  // Custom icon for the starting point
  const startIcon = L.icon({
    iconUrl: 'ship.png', // Path to your custom image
    iconSize: [40, 40], // Size of the icon
    iconAnchor: [20, 40], // Point of the icon that corresponds to the marker's location
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
  });
  
  // Variable to store the current route layer
  let routeLayer = null;
  let customRoutePoints = [];
  let intervalId = null; // To store the interval ID
  let startMarker = null; // To store the starting point marker
  
  // Function to update the route on the map
  function updateRoute() {
    // Clear the previous route layer
    if (routeLayer) {
      map.removeLayer(routeLayer);
    }
  
    // Create a new line from the updated custom route points
    const route = turf.lineString(customRoutePoints);
  
    // Add the new route to the map with a dotted line style
    routeLayer = L.geoJSON(route, {
      style: {
        color: 'blue',
        weight: 3,
        dashArray: '5, 5' // Make the line dotted
      }
    }).addTo(map);
  
    // Remove the previous starting point marker (if it exists)
    if (startMarker) {
      map.removeLayer(startMarker);
    }
  
    // Add a custom icon at the new starting point
    if (customRoutePoints.length > 0) {
      const startPoint = customRoutePoints[0];
      startMarker = L.marker([startPoint[1], startPoint[0]], { icon: startIcon }).addTo(map);
    }
  
    // Calculate distance
    const distance = turf.length(route, { units: 'kilometers' });
    document.getElementById('distance').innerText = `${distance.toFixed(2)} km`;
  
    // Estimate time (assuming an average ship speed of 20 knots ~ 37 km/h)
    const speed = 37; // km/h
    const timeInHours = distance / speed;
  
    // Convert time into days and hours
    const days = Math.floor(timeInHours / 24);
    const hours = Math.floor(timeInHours % 24);
  
    // Display time in days and hours
    document.getElementById('time').innerText = `${days} days, ${hours} hours`;
  }
  
  // Function to delete one point every 2 seconds
  function deletePointEveryTwoSeconds() {
    intervalId = setInterval(() => {
      if (customRoutePoints.length > 1) {
        // Remove the first point from the array
        customRoutePoints.shift();
        // Update the route on the map
        updateRoute();
      } else {
        // Stop the interval when only one point is left
        stopTravel();
        console.log("All points deleted.");
      }
    }, 500); // 2000 milliseconds = 2 seconds
  }
  
  // Function to load the selected route
  function loadRoute() {
    const selectedRoute = document.getElementById('routeSelector').value;
    customRoutePoints = [...routes[selectedRoute]]; // Copy the selected route
    updateRoute(); // Draw the initial route
  }
  
  // Function to start the travel simulation
  function startTravel() {
    if (intervalId) {
      clearInterval(intervalId); // Clear any existing interval
    }
    deletePointEveryTwoSeconds(); // Start deleting points
  }
  
  // Function to stop the travel simulation
  function stopTravel() {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      intervalId = null; // Reset the interval ID
    }
  }
  
  // Initial setup
  loadRoute(); // Automatically load the default route