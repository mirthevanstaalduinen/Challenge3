
/**
 * Fetch API data
 */

function getAPIdata() {

	var city = document.getElementById('city').value; 

	getEventsAPIdata(city);
	
	// get weather forecast
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=395c998a3ffff7ae84f68997c5e23f30")

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		console.log(response.wind.speed);
		console.log(response);

		var wind = response.wind.speed;

		if(wind > 4) {
			document.getElementById('message').innerHTML = 'Aaaoooo, het waait hier te hard waardoor het niet veilig is om te landen!!!';
			document.body.className = 'heavyRain';
		}

		else if(wind < 4) {
			document.getElementById('message').innerHTML = 'Jeeeeej, het is hier veilig om te landen!!!';

		}
	})
	
	// catch error
	.catch(function(error) {
		console.error('Request failed', error);
	});
}

function onAPISucces(response) {


	var city = document.getElementById('city').value; 
	// document.getElementById('cityinfo').innerHTML =

	getEventsAPIdata(city);

	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	// var weatherBox = document.getElementById('weather');
	// weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

// init data stream
document.getElementById("getWeather").onclick = function(){
	getAPIdata();
};
