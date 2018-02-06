//detectar localizacion
// let x = document.getElementById("ubicacion");
// function myUbicacion() {
//         navigator.geolocation.getCurrentPosition(showPosition);
// }
// function showPosition(position) {
//     x.innerHTML = "Latitud: " + position.coords.latitude + 
//                   "<br>Longitud: " + position.coords.longitude;
// }
let x = document.getElementById("ubicacion");
function myUbicacion() {
  if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
	}
}
//mapa
function initMap() {
	
	var latitud,longitud;
	function showPosition(position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
	}
        var laboratoria = {lat: -33.4190451, lng: -70.6439039};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: laboratoria
        });
        // var marker = new google.maps.Marker({
        //   position: {lat:latitud, lng:longitud},
        //   map: map
        // });
      }