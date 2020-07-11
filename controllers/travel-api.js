$(document).ready(function () {


    let queryRun = "https://www.trailrunproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    

    let queryClimb = "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key="
    

    let queryMtb = "https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    

    let queryHike = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    

    let queryParks = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    

    let querySnow = "https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    

    $.ajax({
        url: queryRun + process.env.apiKeyRun,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryClimb + process.env.apiKeyClimb,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryHike + process.env.apiKeyHike,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryParks + process.env.apiKeyParks,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: queryMtb + process.env.apiKeyMtb,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });
    $.ajax({
        url: querySnow + process.env.apiKeySnow,
        method: "GET"
    }).then(function (res) {
        console.log(res);
    });

});
