let loggedIn = true
let right = "manager"
let acces
let logmessage
let userType = "user";
let userCategory;
let isAuthenticated = true


if(right == "admin"){
    acces = "Full acces"
    console.log("Type of acces:", acces)
}else if(right == "manager"){
    acces = "write and read"
    console.log("Type of acces: ", acces)
}
else{
    acces = "No acces!"
    console.log("Type of acces: ", acces)
}
if (loggedIn){
    if(right == "admin"){
        logmessage = "Welcome FullUser"
        console.log("Type of acces: ", logmessage)
    }else if(right == "manager"){
        logmessage = "Welcome Manager"
        console.log("Type of acces: ", logmessage)
    }
    else{
        logmessage = "Unknown User"
        console.log(logmessage)

    }
}else{
    logmessage = "Loggen sie sich!"
    console.log(logmessage)
}
switch(userType){
    case "admin":
        userCategory = "Adminstrator"
        break
    case "manager":
        userCategory = "Manager"
        break
    case "subscriber":
        userCategory = "Subscriber"
        break
    default:
        userCategory = "Unknown"

}
console.log("User Categorie =", userCategory)
let authenticatedStatus = isAuthenticated ? "Authenticated": "not Authenticated"
console.log(authenticatedStatus)