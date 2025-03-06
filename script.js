let routes = {}; 

async function fetchRoutes() {
    try {
        const response = await fetch('routes.json'); 
        const data = await response.json();
        routes = data;
        loadRoute(); 
    } catch (error) {
        console.error('Error fetching route data:', error);
    }
}


const map = L.map('map').setView([0, 0], 2);


L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YucvbolmP8WJeXxZK3eL', {
    attribution: '© MapTiler © OpenStreetMap contributors'
}).addTo(map);


const startIcon = L.icon({
    iconUrl: 'ship.png', 
    iconSize: [40, 40], 
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40] 
});


let routeLayer = null;
let customRoutePoints = [];
let intervalId = null; 
let startMarker = null; 


const apiKey = '95ba2bbb99ada440533c5a0e0a7b79cb'; 


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


async function updateRoute() {
  
    if (routeLayer) {
        map.removeLayer(routeLayer);
    }

    const route = turf.lineString(customRoutePoints);

    routeLayer = L.geoJSON(route, {
        style: {
            color: 'blue',
            weight: 3,
            dashArray: '5, 5' 
        }
    }).addTo(map);

   
    if (startMarker) {
        map.removeLayer(startMarker);
    }

   
    if (customRoutePoints.length > 0) {
        const startPoint = customRoutePoints[0];
        startMarker = L.marker([startPoint[1], startPoint[0]], { icon: startIcon }).addTo(map);

   
        const weatherData = await fetchWeather(startPoint[1], startPoint[0]);
        updateWeather(weatherData);
    }


    const distance = turf.length(route, { units: 'kilometers' });
    document.getElementById('distance').innerText = `${distance.toFixed(2)} km`;

    const speed = 37; 
    const timeInHours = distance / speed;

    const days = Math.floor(timeInHours / 24);
    const hours = Math.floor(timeInHours % 24);

    document.getElementById('time').innerText = `${days} days, ${hours} hours`;
}

function deletePointEveryTwoSeconds() {
    intervalId = setInterval(async () => {
        if (customRoutePoints.length > 1) {
           
            customRoutePoints.shift();
         
            await updateRoute();
        } else {
           
            stopTravel();
            console.log("All points deleted.");
        }
    }, 500); 
}


function loadRoute() {
    const selectedRoute = document.getElementById('routeSelector').value;
    customRoutePoints = [...routes[selectedRoute]]; 
    updateRoute();
}
function startTravel() {
    if (intervalId) {
        clearInterval(intervalId); 
    }
    deletePointEveryTwoSeconds(); 
}

function stopTravel() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; 
    }
}


fetchRoutes(); 