// show and hide panel and marker according to point-of-interest
function showPanelAndMarker(poi) {
    // hide all info windows of mapThings 
    hideAllInfoWindows();
    
    // get div with things to do content
    var div = document.getElementById(poi);
    
    // if div is visible
    if (div.style.display === "block") {
        // hide div
        div.style.display = "none";
    }
    else {
        // show div
        div.style.display = "block";
        // iterate through all the markers of mapThings
        markersThings.forEach(function(marker) {
            // if the marker is the point-of-interest the user clicked
            if (marker.id === poi) {
                // fire click event to show info window
                google.maps.event.trigger(marker.mapsMarker, 'click');
            }
        });
        
    }
}

// when the DOM is loaded and rendered (HTML is rendered)
document.addEventListener("DOMContentLoaded", function(event) {
    
    // get all elements with class 'showThings'
    var activityItems = document.getElementsByClassName('showThings');
    
    // iterate through activity items
    for (var i = 0; i < activityItems.length; i++) {
        
        // add a click event listener to each item
        activityItems[i].addEventListener('click', function() {
            
            // retrieve the data-poi attribute value
            var poi = this.dataset.poi;
            
            // show or hide panel and marker 
            showPanelAndMarker(poi);
        });
    }
});
