$(document).ready(function () {


    let queryRun = "https://www.trailrunproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let apiKeyRun = "200828387-993ff5fa6255bad42aa8102efcb6520d"

    let queryClimb = "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key="
    let apiKeyClimb = "200828387-2aa80e11d858712b7a6b20d2e64cfbc0"

    let queryMtb = "https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let apiKeyMtb = "200828387-993ff5fa6255bad42aa8102efcb6520d"

    let queryHike = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let apiKeyHike = "200828387-993ff5fa6255bad42aa8102efcb6520d"

    let queryParks = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let apiKeyParks = "200828387-993ff5fa6255bad42aa8102efcb6520d"

    let querySnow = "https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let apiKeySnow = "200828387-993ff5fa6255bad42aa8102efcb6520d"

    $.ajax({
        url: queryRun + apiKeyRun,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryClimb + apiKeyClimb,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryHike + apiKeyHike,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryParks + apiKeyParks,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryMtb + apiKeyMtb,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: querySnow + apiKeySnow,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });

});