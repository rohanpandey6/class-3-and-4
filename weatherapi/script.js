var request = new XMLHttpRequest();
var api_key = 'a5b5d4833fb8a7a3f996cebcdb96093d'
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function(){
	var data = JSON.parse(this.response);	
	for (var i in data){
		by_city(data[i]['capital'])
		by_lat_lon(data[i]['latlng'])
	}
}

function by_city(city_name){	
    if (! city_name){
		return
	}
	var request = new XMLHttpRequest(); 
	request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`,true);
	request.send();
	request.onload = function(){
	var weather_by_city = JSON.parse(this.response);
	console.log(`${city_name}: `,weather_by_city['main']['temp'])
	
}
}

function by_lat_lon(lat_long){
	var request = new XMLHttpRequest();
	request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat_long[0]}&lon=${lat_long[1]}&appid=${api_key}`,true);
	request.send()
	request.onload = function(){
	var data = JSON.parse(this.response);
	console.log(`${lat_long}: `, data['main']['temp'])
}
}
