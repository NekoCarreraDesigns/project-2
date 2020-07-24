$(document).ready(function () {
    $("#pin").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let userPin = {
            location_id: $("user-location"),
            location_name: $("user-location-name")
        }
        $.ajax("/users/location/:id", {
            type: "PUT",
            data: userPin
        }).then(() => {
            location.reload("/users/:id")
        });
    });

    $("#remove-pin").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let removePin = {
            location_id: $("user-location"),
            location_name: $("user-location-name")
        }
        $.ajax("users/location/:id", {
            type: "PUT",
            data: removePin
        }).then(() => {
            location.reload("/users/:id")
        })
    })

});