$(document).ready(function () {
    $(".close").on("submit", function (event) {
        $.ajax("/locations", {
            type: "GET"

        }).then(function (res) {
            console.log(res);
            location.reload();
        })
    })
});