$(document).ready(function() {
  $("form#flavors").submit(function(event) {
  event.preventDefault();
  
  const icecreamFlavors = ['Black Sesame', 'Red Bean', 'Spumoni', 'Chocolate Peanut Butter', 'Green Tea'];
  icecreamFlavors.forEach(function(flavor) {
    $("#icecreamresults").append("<li>" + flavor + "</li>") 
    });
console.log
});
});