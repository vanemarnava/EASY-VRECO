//detectar localizacion
// let x = document.getElementById("ubicacion");
// function myUbicacion() {
//         navigator.geolocation.getCurrentPosition(showPosition);
// }
// function showPosition(position) {
//     x.innerHTML = "Latitud: " + position.coords.latitude + 
//                   "<br>Longitud: " + position.coords.longitude;
// }
// let x = document.getElementById("ubicacion");
// function myUbicacion() {
//   if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
// 	}
// }
// //mapa
// function initMap() {
	
// 	var latitud,longitud;
// 	function showPosition(position) {
//     latitud = position.coords.latitude;
//     longitud = position.coords.longitude;
// 	}
//         var laboratoria = {lat: -33.4190451, lng: -70.6439039};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 16,
//           center: laboratoria
//         });
//         // var marker = new google.maps.Marker({
//         //   position: {lat:latitud, lng:longitud},
//         //   map: map
//         // });
//       }

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.4363526, lng: -70.6323715},
          zoom: 12
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