 function showRestaurant(element) {

    // get the dropdown content by getting the next sibling
    var restaurants = element.nextElementSibling;

   // if restaurants is visible
     if (restaurants.style.display === "block") {
      // hide
      restaurants.style.display = "none";
     }
     else {
      // show
      restaurants.style.display = "block";
     }
 }
