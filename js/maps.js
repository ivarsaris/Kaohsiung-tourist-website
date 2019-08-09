function initMap() {
    // map things to do
    var mapThings = new google.maps.Map(document.getElementById("mapThings"), {
        zoom: 11,
        center: {
            lat: 22.652951,
            lng: 120.342845
        }
    });

    // array of markers
    var markers = [{
            coordinates: { lat: 22.619972, lng: 120.281796 },
            infoContent: "<h5>Pier2 Art Center</h5>"
        },
        {
            coordinates: { lat: 22.68506, lng: 120.297396 },
            infoContent: "<h5>lotus lake</h5>"
        },
        {
            coordinates: { lat: 22.612907, lng: 120.269233 },
            infoContent: "<h5>Qijin</h5>"
        },
        {
            coordinates: { lat: 22.634623, lng: 120.275121 },
            infoContent: "<h5>Shou Shan Zoo and view point</h5>"
        },
        {
            coordinates: { lat: 22.666193, lng: 120.299949 },
            infoContent: "<h5>Ruifeng Night Market</h5>"
        },
        {
            coordinates: { lat: 22.632051, lng: 120.299247 },
            infoContent: "<h5>Liuhe Night Market</h5>"
        },
        {
            coordinates: { lat: 22.636140, lng: 120.257031 },
            infoContent: "<h5>Chaishan Secret Beach</h5>"
        },
        {
            coordinates: { lat: 22.75708, lng: 120.44135 },
            infoContent: "<h5>Fo Guang Shan Buddha Memorial Center</h5>"
        },
        {
            coordinates: { lat: 22.652997, lng: 120.305232 },
            infoContent: "<h5>Love river</h5>"
        },
        {
            coordinates: { lat: 22.658485, lng: 120.267770 },
            infoContent: "<h5>Chai Shan mountain</h5>"
        },
        {
            coordinates: { lat: 22.607870, lng: 120.298428 },
            infoContent: "<h5>Kaohsiung Exhibition Center</h5>"
        },
        {
            coordinates: { lat: 22.623018, lng: 120.342482 },
            infoContent: "<h5>National Kaohsiung Centre for the Arts</h5>"
        },
    ]

    //iterate through array of markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // add marker function
    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: mapThings,
        });
        // Adding infowindow to marker
        var infoWindow = new google.maps.InfoWindow({
            content: properties.infoContent
        });
        // window opens when clicking
        marker.addListener("click", function() {
            infoWindow.open(mapThings, marker);
        });
    }

    // map places to stay
    var mapPlaces = new google.maps.Map(document.getElementById("mapPlaces"), {
        zoom: 8,
        center: {
            lat: 22.652951,
            lng: 120.342845
        }
    });
}
