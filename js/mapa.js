var cargarPagina = function() {

  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: "left", // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    $("#ubicacion").val("Latitud: " + lat + "Longitud: " + lon);
   /* var mapa = document.getElementById("mapa")
    mapa.style.height = "250px";
    mapa.style.width = "500px";*/

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById("mapa"), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"You are here!"
    });
};

var funcionError = function (error) {
	console.log(error);
};

$(document).ready(cargarPagina);

