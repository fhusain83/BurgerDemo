// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
   

    var newDevourState = {
      devour: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#add-item").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
 
    var newBurger = {
      name: $("#NewBurger").val().trim(),
      devour: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
