$(document).ready(function () {

    $("#sign-in").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let userD =
        {
            user: $("#user").val().trim(),
            password: $("#pass").val().trim()
        };

        $.ajax("/api/login", {
            type: "POST",
            data: userD
        }).then(() => {
            location.replace("/users")
        })
    });

    $("#signup").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let newUser = {
            username: $("#new-user").val().trim(),
            firstName: $("#fname").val().trim(),
            lastName: $("#lname").val().trim(),
            pass: $("#pass-create").val().trim()
        };
        $.ajax("/api/signup", {
            type: "POST",
            data: newUser
        }).then(function () {
            window.location.href = "/login";
        })

    })

    $("#searchBtn").on("click", function (e) {
        e.preventDefault();
        console.log("clicked")
        let location = $("#location-search").val().trim();

        $.ajax("/api/locations/:id" + location, {
            type: "GET"
        }).then(function () {
            location.replace("/locations")
        })

    })
})