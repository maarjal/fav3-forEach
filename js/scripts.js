$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    debugger;
    var food = $("input#food").val();
    var city = $("input#city").val();
    var book = $("input#book").val();
    var movie = $("input#movie").val();
    var favoriteThings = [food, city, book, movie];

    var newfavs = [favoriteThings[1], favoriteThings[0], favoriteThings[2]];

    newfavs.push(favoriteThings[0],favoriteThings[1],favoriteThings[2],favoriteThings[3]);
    alert(newfavs);

    //i think you need another loop
    var counter = 0;

    //start loop
    newfavs.forEach(function() {
      $(".show").append("<li>" + newfavs[counter] + "</li>");
      $("#show").show()
      counter++
    });

    //end loop



    event.preventDefault();

  });


});
