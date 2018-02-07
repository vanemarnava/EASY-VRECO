
function initMap() {
	let inputPartida = document.getElementById('inputPartida');
	let inputDestino = document.getElementById('inputDestino');
	new google.maps.places.Autocomplete(inputPartida);
	new google.maps.places.Autocomplete(inputDestino);
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.4363526, lng: -70.6323715},
          zoom: 14
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        let btnFind = document.getElementById('btnFind');
        btnFind.addEventListener('click', findMe);
        function findMe(){
        	
        	 // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            inputPartida.value = pos.lat + ',' + pos.lng;
            var iconBase = 'http://i67.tinypic.com/';
            var marker = new google.maps.Marker({
	          position: pos,
	          map: map,
	          icon: iconBase + '2vlnz0l.png'
	        });
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        }

        let route = document.getElementById('route');
        let directionService = new google.maps.DirectionsService;
        let directionDisplay = new google.maps.DirectionsRenderer;
        let calculateRoute = function(directionService, directionDisplay) {
        	directionService.route({
        		origin: inputPartida.value,
        		destination: inputDestino.value,
        		travelMode: 'WALKING'
        	}, function(response, status) {
        			if (status === 'OK') {
        				directionDisplay.setDirections(response);
        			} else {
        					window.alert("No encontramos ruta");
        			}
        	})
        }
        directionDisplay.setMap(map);
        let trazar = function() {
        	calculateRoute(directionService, directionDisplay);
        }
        route.addEventListener('click', trazar);
       
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: No se pudo acceder a tu ubicación' :
                              'Error: Tu navegador no soporta geolocalización');
      }

