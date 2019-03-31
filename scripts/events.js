/**
 * Fetch API data
 */


function getEventsAPIdata(city) {
	
	// get weather forecast
	//fetch("https://www.triposo.com/api/20181213/location.json?part_of=France&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type&account=AOYLE8LO&token=xx6luhn0k0fhlou5m4h52poe8c0fjpej")
	fetch("https://www.triposo.com/api/20181213/location.json?id="+ city +"&fields=all&account=AOYLE8LO&token=xx6luhn0k0fhlou5m4h52poe8c0fjpej")



	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		console.log(response);

		document.getElementById('cityinfo').innerHTML = response.results[0].intro;
		document.getElementById('map').src = response.results[0].public_transport_maps[0].source_url;

	})
	
	// catch error
	.catch(function(error) {
		console.error('Request failed', error);
	});
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}
