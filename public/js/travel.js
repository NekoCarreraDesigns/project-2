$(document).ready(function () {

    console.log('travel.js loaded')
    $(".search").on("submit", function (event) {
        $.ajax("/locations", {
            type: "GET"

        }).then(function (res) {
            console.log(res);
            location.reload();
        });
    });

    $(".create").on("click", function (event) {
        let id = $(this).data("id");
        let createUser = $(this).data("create");
        let newPass = $(this).data("newPass")
        console.log(id + createUser + newPass);
        console.log("clicked")
        $.ajax("/userlogin", {
            url: "/userlogin",
            type: "POST"
        }).then(function () {
            console.log("User has been created");
            location.reload("/");
        })
    });

    $(".login").on("click", function (event) {
        console / log("clicked")
        let userName = $(this).data(userName);
        let userPword = $(this).data(userPword);
        console.log(userName + userPword)
        $.ajax("/user", {
            url: "/user",
            type: "POST",
            userName: this.userName,
            userPword: this.userPword
        }).then(function () {
            console.log("Welcome back" + userName);
            location.replace("/")
        })
    })

});