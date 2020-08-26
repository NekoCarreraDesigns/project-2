let trailName;
let parkName;
let routeName;
let mtnName;
let currentConditions;
let searchSummary;
let searchLocation;
let difficultyLevel;

function letsGoRunSearch() {
    let queryRun = "https://www.trailrunproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&maxResult=10&key=";
    let apiKey = process.env.apiKeyRun;
    let location = $("#location-search").val().trim();

    $.ajax("/api/locations/:id", {
        url: queryRun + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        trailName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(trailName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)

    });
}
function letsGoClimbSearch() {
    let queryClimb = "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key="
    let location = $("#location-search").val().trim();
    let apiKey = process.env.apiKeyClimb

    $.ajax({
        url: queryClimb + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        routeName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(routeName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)
    })
}

function letsGoMtbSearch() {
    let queryMtb = "https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let location = $("#location-search").val().trim();
    let apiKey = process.env.apiKeyMtb

    $.ajax({
        url: queryMtb + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        trailName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(trailName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)
    })


}

function letsGoHikingSearch() {
    let queryHike = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let location = $("#location-search").val().trim();
    let apiKey = process.env.apiKeyHike

    $.ajax({
        url: queryHike + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        trailName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(trailName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)
    })

}

function letsGoParkSearch() {
    let queryParks = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let location = $("#location-search").val().trim();
    let apiKey = process.env.apiKeyParks

    $.ajax({
        url: queryParks + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        parkName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(parkName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)
    })
}

function letsGoRideSearch() {
    let querySnow = "https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key="
    let location = $("#location-search").val().trim();
    let apiKey = process.env.apiKeySnow

    $.ajax({
        url: querySnow + location + apiKey,
        method: "GET",
    }).then((response) => {
        console.log(response);
        mtnName = response.name;
        difficultyLevel = response.difficulty;
        searchSummary = response.summary;
        searchLocation = response.location;
        currentConditions = response.conditionDetails;
        searchedLocationEl = $("#searched-location").text(mtnName, difficultyLevel, searchSummary, searchLocation, currentConditions)
        $("#searched-location").prepend(searchedLocationEl)
    })
}



