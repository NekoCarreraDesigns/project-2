$(document).ready(function () {

    console.log('travel.js loaded')
    $(".search").on("submit", function (event) {
        $.ajax("/locations", {
            url: "/locations",
            type: "GET"
        }).then(function (res) {
            console.log(res);
            location.reload();
        });
    });

    $(".create").on("click", function (event) {
        const newUser = {
            userName: $("#user-create").val().trim(),
            newPass: $("#pass-create").val().trim(),
            newPassRep: $("#pass-repeat").val().trim(),
            email: $("#email").val().trim()
        }
        console.log("clicked")
        $.ajax("/users", {
            type: "POST",
            data: newUser
        }).then(function () {
            console.log("User has been created");
            location.replace("/user");
        })
    });

    $(".login").on("click", function (event) {
        console.log("clicked")
        let userName = $(this).data(userName);
        let userPword = $(this).data(userPword);
        console.log(userName + userPword)
        $.ajax("/users", {
            type: "POST",
            userName: this.userName,
            userPword: this.userPword
        }).then(function () {
            console.log("Welcome back" + userName);
            location.replace("/")
        })
    })

});