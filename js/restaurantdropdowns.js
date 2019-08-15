 function showRestaurant(element) {

    // get all elements with class 'showRestaurants'
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

  // function showRestaurantsFunction(restaurants) {

  // }

  // // when the DOM is loaded and rendered (HTML is rendered)
  // document.addEventListener("DOMContentLoaded", function(event) {

  //  // get all elements with class 'showRestaurants'
  //  var restaurants = document.getElementsByClassName('showRestaurants');

  //  // iterate through all "show restaurants"
  //  for (var i = 0; i < restaurants.length; i++) {

  //   // add a click event listener to each item
  //   restaurants[i].addEventListener('click', function() {

  //    // show or hide restaurants 
  //    showRestaurantsFunction(restaurants);
  //   });
  //  }
  // });
 