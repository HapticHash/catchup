var geocoder = new google.maps.Geocoder;
var latlng = {lat: 33.7953521, lng: -118.1052428};

function geocodeLatLng() {
    geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                alert(results[0].formatted_address);
            }
        }
    });
}
