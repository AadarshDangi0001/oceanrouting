let routes = {}; // Variable to store the fetched route data

// Fetch the route data from the JSON file
async function fetchRoutes() {
    try {
        const response = await fetch('routes.json'); // Path to your JSON file
        const data = await response.json();
        routes = data; // Store the fetched data in the `routes` variable
        loadRoute(); // Load the initial route after fetching the data
    } catch (error) {
        console.error('Error fetching route data:', error);
    }
}

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
fetchRoutes(); // Fetch route data and load the default route