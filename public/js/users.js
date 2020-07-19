$(document).ready(function(){

$("button.btn#sign-in").on("click", function(e){
    e.preventDefault();
    let userD = 
    {
        user: $("[name=user]").val().trim(),
        password: $("[name=pass]").val().trim()
    };
    
    $.ajax("/api/login", {
        type: "POST",
        data: userD
    }).then(()=>{
        window.location.replace("/users");
    })
});

$("button.btn#signup").on("click", function(e){
    e.preventDefault();
    let newUser = {
        username: $("[name=username]").val().trim(),
        firstName: $("[name=firstname]").val().trim(),
        lastName: $("[name=lastname]").val().trim(),
        pass: $("[name=password]").val().trim()
    };
    $.ajax("/api/signup", {
        type: "POST",
        data: newUser
    }).then(()=>{
        window.location.replace("/login");
    })

})

})