

var signInModel = document.getElementById("signInModel");
var closeModel = document.getElementsByClassName("close")[0];
var signUpModel = document.getElementById("signUpModel");
var closeSignUp = document.getElementsByClassName("close")[1];
function showSignInModal(){
    signInModel.style.display = "flex";
}

function hideSignInModal(){
    signInModel.style.display = "none";
}

closeModel.onclick = function() {
    signInModel.style.display = "none";
}

function showSignUpModal() {
    signUpModel.style.display = "flex";
}

closeSignUp.onclick = function () {
    signUpModel.style.display = "none";
}
