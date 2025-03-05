// Preset routes

const routes = {
    india_south_america: [
        [76.74877, 10.41412], 
        [75.10653, 9.22536], 
        [74.10439, 8.78106], 
        [72.2658, 6.76509], 
        [70.95625, 4.4139], 
        [70.07304, 3.16407], 
        [68.54505, 0.74925], 
        [68.54505, 0.74925], 
        [66.03715, -2.95687], 
        [64.64467, -4.78282], 
        [62.89451, -7.09509], 
        [61.39193, -8.9857], 
        [60.13656, -10.56718], 
        [59.04505, -12.07631], 
        [57.96568, -13.38736], 
        [56.60885, -14.9433], 
        [55.48523, -16.33096], 
        [54.37496, -17.66415], 
        [52.92959, -19.48304], 
        [51.64396, -21.30151], 
        [50.37651, -22.73439], 
        [49.19362, -24.29475], 
        [47.50056, -24.96463], 
        [45.32459, -25.87342], 
        [43.39249, -27.03885], 
        [41.3704, -27.75809], 
        [39.95023, -28.30886], 
        [38.02518, -29.28719], 
        [36.31965, -30.07979], 
        [34.54029, -30.94106], 
        [32.69413, -31.68932], 
        [30.84164, -32.50855], 
        [28.77813, -33.48022], 
        [26.92753, -34.16753], 
        [25.07925, -34.46607], 
        [23.42628, -34.73791], 
        [21.64935, -34.80752], 
        [20.31356, -35.03356], 
        [18.12585, -34.7594], 
        [16.65508, -34.18649], 
        [15.01676, -33.5263], 
        [13.22765, -32.71493], 
        [11.53753, -32.05619], 
        [10.0526, -31.42164], 
        [8.86583, -30.99583], 
        [7.49631, -30.49089], 
        [6.33835, -29.89929], 
        [4.9758, -29.22701], 
        [3.68753, -28.57946], 
        [2.68937, -28.01495], 
        [1.46963, -27.47855], 
        [0.46504, -26.87209], 
        [-0.83308, -26.28499], 
        [-2.47192, -25.7015], 
        [-3.47125, -25.14778], 
        [-4.78464, -24.41435], 
        [-5.79196, -23.82131], 
        [-6.74133, -23.33514], 
        [-7.90964, -22.66097], 
        [-8.83477, -22.09489], 
        [-9.72487, -21.74049], 
        [-10.73913, -21.07894], 
        [-11.71411, -20.44135], 
        [-12.63295, -19.77022], 
        [-13.76714, -18.98057], 
        [-14.84092, -18.23862], 
        [-15.90207, -17.50757], 
        [-16.88128, -16.85537], 
        [-17.78525, -16.20308], 
        [-18.0254, -15.34035], 
        [-18.91055, -14.77786], 
        [-19.5405, -14.33081], 
        [-20.52562, -13.66046], 
        [-21.41864, -13.08096], 
        [-22.47867, -12.44752], 
        [-23.72856, -11.67632], 
        [-24.48525, -11.09519], 
        [-25.25756, -10.57167], 
        [-27.5358, -9.8146], 
        [-28.56667, -9.50868], 
        [-29.67714, -9.15307], 
        [-30.64419, -8.83038], 
        [-32.08542, -8.4112], 
        [-33.53252, -7.94612], 
        [-34.81973, -7.61373]  // South America (Brazil)
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

// OpenWeatherMap API key
const apiKey = '95ba2bbb99ada440533c5a0e0a7b79cb'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update weather information
function updateWeather(weatherData) {
    if (weatherData) {
        document.getElementById('weather').innerText = weatherData.weather[0].description;
        document.getElementById('temperature').innerText = `${weatherData.main.temp} °C`;
        document.getElementById('humidity').innerText = `${weatherData.main.humidity} %`;
        document.getElementById('windSpeed').innerText = `${weatherData.wind.speed} m/s`;
    } else {
        document.getElementById('weather').innerText = '-';
        document.getElementById('temperature').innerText = '-';
        document.getElementById('humidity').innerText = '-';
        document.getElementById('windSpeed').innerText = '-';
    }
}

// Function to update the route on the map
async function updateRoute() {
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

        // Fetch weather data for the new starting point
        const weatherData = await fetchWeather(startPoint[1], startPoint[0]);
        updateWeather(weatherData);
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
    intervalId = setInterval(async () => {
        if (customRoutePoints.length > 1) {
            // Remove the first point from the array
            customRoutePoints.shift();
            // Update the route on the map
            await updateRoute();
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