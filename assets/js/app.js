// funcion para iniciar mapa
//se llama en el src del script
function initMap() {

	
  var laboratoriaChile = {lat: -33.41884700000001, lng: -70.6423528};
  var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17, // acercamiento con el que se vera el mapa
	  //center indica el centro del mapa, laboratoriaChile indica ubicacion en que se centrara el mapa
    center: laboratoriaChile

  });

  //anadir marcado
  var markerLaboratoria = new google.maps.Marker({
    position: laboratoriaChile,//indica el lugar donde se pondra el marcador, recibiendo la latitud y longitud
    map: map //se indica el mapa en el que aparecera el marcado
  });

  // con este se muestra por el html cuales son la longitud y latitud de donde nos encontramos
		// output.innerHTML = '<p>Latitud: ' + latitude + '<br> Longitud: ' + longitude + '</p>';

  //funcion buscar
  function buscar(){
    if(navigator.geolocation){ 
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }

  document.getElementById("encontrar").addEventListener("click", buscar);
  
  var latitud, longitud;

  var funcionExito = function(posicion){ 
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

  //creando el marcador de la ubicacion
  var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    animation: google.maps.Animation.DROP, //animacion con que aparecera el marcador de ubicacion
    map: map
  });

  //dando ultimos detalles se se veran en la ubicacion
  map.setZoom(17); //acercar el mapa
  map.setCenter({lat:latitud, lng:longitud}); //asigna un nuevo centro del mapa

  //funcion que muestra una alerta al no encontrar la ubicacion
  var funcionError = function(error){
    alert("tenemos un problema con encontrar tu ubicación");
  }

  //-----------------------------------------------------//

  // autocompletar el input
	// llamar a los inputs que se quieren autocompletar 
	var inputPartida = document.getElementById('pto-partida');
	var inputLlegada = document.getElementById('pto-llegada');

	// //con la clase autocomplete se indica que este input va a tener esta funcionalidad
	new google.maps.places.Autocomplete(inputPartida);
	new google.maps.places.Autocomplete(inputLlegada);

	// var autocomplete = new google.maps.places.Autocomplete(input);
	// autocomplete.bindTo('bounds', map); 

	//se declaran las variables para trazar la ruta
	// trazar ruta
	var direstionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;

	// funcion para trazar ruta
	var calculateAndDisplayRoute = function(direstionService, directionDisplay){
		//devolvera un directionsRequest, el cual sera un objeto literal
		direstionsService.route({
			origin: inputPartida.value,
			destination: inputLlegada.value,
			travelMode: 'DRIVING'
		}, function(response, status){
			if (status === 'OK'){
				// en caso de que el status sea ok se gtrazara la ruta
				//obteniendo los datos del objeto 'response'
				directionsDisplay.setDirections(response);
			} else {
				window.alert('No encontramos ruta.');
			}
		});
	}

	directionsDisplay.setMap(map);
	var trazarRuta = function(){
		calculateAndDisplayRoute(direstionsService, directionsDisplay);
	};

	document.getElementById('trazar-ruta').addEventListener('click', trazarRuta);

}

}