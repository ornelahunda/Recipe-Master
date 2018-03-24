var map;
var infowindow;

function initMap() {
    var philly = {
        lat: 40.0024133,
        lng: -75.2584614
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: philly,
        zoom: 17
    });

    infowindow = new google.maps.InfoWindow();
    searchNearby(philly);
}

function searchNearby(position) {
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: position,
        radius: 5000,
        type: ["supermarket"]
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;


        var user_location = {
            lat: latitude,
            lng: longitude
        };
        searchNearby(user_location);

        map.setCenter({
            lat: latitude,
            lng: longitude
        });

    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}