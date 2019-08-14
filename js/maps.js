// define variables for maps
var mapThings, mapPlaces;

// array of markers for the Things map
var markersThings = [{
        coordinates: { lat: 22.619972, lng: 120.281796 },
        infoContent: "<h5>Pier2 Art Center</h5>",
        id: "pier",
        category: "culture",
    },
    {
        coordinates: { lat: 22.68506, lng: 120.297396 },
        infoContent: "<h5>lotus lake</h5>",
        id: "lotus",
        category: "nature"
    },
    {
        coordinates: { lat: 22.612907, lng: 120.269233 },
        infoContent: "<h5>Qijin</h5>",
        id: "qijin",
        category: "culture"
    },
    {
        coordinates: { lat: 22.634623, lng: 120.275121 },
        infoContent: "<h5>Shou Shan viewpoint and zoo</h5>",
        id: "zoo",
        category: "nature"
    },
    {
        coordinates: { lat: 22.666193, lng: 120.299949 },
        infoContent: "<h5>Ruifeng Night Market</h5>",
        id: "ruifeng",
        category: "culture"
    },
    {
        coordinates: { lat: 22.632051, lng: 120.299247 },
        infoContent: "<h5>Liuhe Night Market</h5>",
        id: "liuhe",
        category: "culture"
    },
    {
        coordinates: { lat: 22.636140, lng: 120.257031 },
        infoContent: "<h5>Chaishan Secret Beach</h5>",
        id: "beach",
        category: "nature"
    },
    {
        coordinates: { lat: 22.75708, lng: 120.44135 },
        infoContent: "<h5>Fo Guang Shan Buddha Memorial Center</h5>",
        id: "buddha",
        category: "culture"
    },
    {
        coordinates: { lat: 22.652997, lng: 120.305232 },
        infoContent: "<h5>Love river</h5>",
        id: "river",
        category: "nature"
    },
    {
        coordinates: { lat: 22.658485, lng: 120.267770 },
        infoContent: "<h5>Chai Shan mountain</h5>",
        id: "monkey",
        category: "nature"
    },
    {
        coordinates: { lat: 22.607870, lng: 120.298428 },
        infoContent: "<h5>Kaohsiung Exhibition Center</h5>",
        id: "exhibition",
        category: "culture"
    },
    {
        coordinates: { lat: 22.623018, lng: 120.342482 },
        infoContent: "<h5>National Kaohsiung Centre for the Arts</h5>",
        id: "artscentre",
        category: "culture"
    },
];

// show or hide category function
function showHideCategory(category, visibility) {
    for (var i = 0; i < markersThings.length; i++) {
        // If is same category or category not picked
        if (markersThings[i].category === category) {
            markersThings[i].mapsMarker.setVisible(visibility);
        }
    }
}

// add marker function
function addMarker(properties) {
    var marker = new google.maps.Marker({
        position: properties.coordinates,
        map: mapThings,
    });
    
    // Adding infowindow to marker
    marker.infoWindow = new google.maps.InfoWindow({
        content: properties.infoContent
    });
    
    // window opens when clicking
    marker.addListener("click", function() {
        marker.infoWindow.open(mapThings, marker);
    });
    
    // return marker after adding
    return marker;
}

// hide all info windows defined in markersThings
function hideAllInfoWindows() {
   markersThings.forEach(function(markerThing) {
     var marker = markerThing.mapsMarker;
     marker.infoWindow.close();
  }); 
}

// callback function for goole maps api
function initMap() {
    // map things to do
    mapThings = new google.maps.Map(document.getElementById("mapThings"), {
        zoom: 11,
        center: {
            lat: 22.652951,
            lng: 120.342845
        }
    });

    // map places to stay
    mapPlaces = new google.maps.Map(document.getElementById("mapPlaces"), {
        zoom: 8,
        center: {
            lat: 22.652951,
            lng: 120.342845
        }
    });

    //iterate through array of markers
    for (var i = 0; i < markersThings.length; i++) {
        // add markers to the mapThings
        markersThings[i].mapsMarker = addMarker(markersThings[i]);
    }
    
    // filterThings checkboxes for hiding and showing markers of a certain category
    var checkboxes = document.getElementsByName("filterThings");
    
    // Iterate through all checkboxes 
    checkboxes.forEach(function(checkbox) {
        // listen for change events
       checkbox.addEventListener('change', function() {
           var visibility = this.checked;
           var category = this.dataset.category;
           showHideCategory(category, visibility);
       });
    });
}    
    
    
