$(document).ready(function () {
    $(".close").on("submit", function (event) {
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
        console.log(id + createUser);

        $.ajax("/users" + id, {
            type: "POST"
        }).then(function () {
            console.log("User has been created");
            location.reload();
        })
    });
    $(".login").on("submit", function (event) {
        let userName = $(this).data(userName);
        let userPword = $(this).data(userPword);
        console.log(userName + userPword)
        $.ajax("/users", {
            type: "POST",
            userName: this.userName,
            userPword: this.userPword
        }).then(function () {
            console.log("Welcome back" + userName);
            location.replace("index")
        })
    })
});