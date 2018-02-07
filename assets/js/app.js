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

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
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

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

