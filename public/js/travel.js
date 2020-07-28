$(document).ready(function () {
    $("#pin").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let userPin = {
            location_id: $("user-location"),
            location_name: $("user-location-name")
        }
        $.ajax("locations/:id", {
            type: "PUT",
            data: userPin
        }).then((res) => {
            location.reload("/users")
        });
    });

    $("#remove-pin").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let removePin = {
            location_id: $("user-location"),
            location_name: $("user-location-name")
        }
        $.ajax("api/location/:id", {
            type: "PUT",
            data: removePin
        }).then(() => {
            location.reload("/users")
        })
    })

});