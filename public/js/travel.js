$(document).ready(function () {
    $(".search").on("submit", function (event) {
        $.ajax("/locations", {
            type: "GET"

        }).then(function (res) {
            console.log(res);
            location.reload();
        });
    });
    $(".create").on("submit", function (event) {
        let id = $(this).data("id");
        let createUser = $(this).data("create");
        let newPass = $(this).data("newPass")
        console.log(id + createUser + newPass);
        console.log("clicked")

        $.ajax("/user" + id, {
            type: "POST"
        }).then(function () {
            console.log("User has been created");
            location.reload("/");
        })
    });
    $(".login").on("submit", function (event) {
        console / log("clicked")
        let userName = $(this).data(userName);
        let userPword = $(this).data(userPword);
        console.log(userName + userPword)
        $.ajax("/user", {
            type: "POST",
            userName: this.userName,
            userPword: this.userPword
        }).then(function () {
            console.log("Welcome back" + userName);
            location.replace("/")
        })
    })
});