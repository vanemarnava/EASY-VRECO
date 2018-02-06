

// funcion para inicial mapa
// function initMap() {
//   var laboratoriaChile = {lat: -33.41884700000001, lng: -70.6423528};
//   var map = new google.maps.Map(document.getElementById('map'), {
// 	  zoom: 19,
//     center: laboratoriaChile
//   });
//   var markerLaboratoria = new google.maps.Marker({
//     position: laboratoriaChile,
//     map: map
//   });
// }

 //-33.41884700000001 -70.6423528


function findMe(){
	var output = document.getElementById('map');

	// verifica si soporta geolocalizacion
	if (navigator.geolocation){
		output.innerHTML = '<p>Tu navegador soporta Geolocalizacion</p>';
	} else {
		output.innerHTML = '<p>Tu navegador NO soporta Geolocalizacion</p>';
	}

	// funcion que obtiene la latitud y longitud de donde nos encontramos
	function localization(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		// con este se muestra por el html cuales son la longitud y latitud de donde nos encontramos
		// output.innerHTML = '<p>Latitud: ' + latitude + '<br> Longitud: ' + longitude + '</p>';
	
		//var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" +latitude+ "," +longitude+ "&size=600x300&markers=color:red%7C" +latitude+ "," +longitude+ "&key=AIzaSyAmzCLrTGJMgn8WRBnwkvVt0w-gWr-jCmA";
		var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" +latitude+ "," +longitude+ "&size=600x300&markers=color:red%7C" +latitude+ "," +longitude+ "&key=AIzaSyDxWWvT1dkARvZiZKLQoQEP0BjBJuoSXr8";
		output.innerHTML = '<img src="' + imgURL + '">'; 
	}

	function error(){
		output.innerHTML = '<p>No se pudo obtener tu ubicacion ...</p>';
	}

	navigator.geolocation.getCurrentPosition(localization,error);

}

var inputPartida = document.getElementById('pto-partida');
var inputLlegada = document.getElementById('pto-llegada');

new google.maps.places.Autocomplete(inputPartida);
new google.maps.places.Autocomplete(inputLlegada);


