// document.getElementById("exit").onclick = function (params) {
//     document.getElementById("body").style.display = "none";
// }

function validateForm(params) {
    var name = document.forms.regForm.Name.value;
    var email = document.forms.regForm.Email.value;
    var password = document.forms.regForm.Password.value;
    var confirmPassword = document.forms.regForm.confirmPassword.value;

    var regName = /\d+$/g;

    if (name =="" || !regName.test(name)) {
        document.getElementById("nameLabel").innerHTML = "please enter your name properly!";
        document.getElementById("nameLabel").style.color = "red";
        document.getElementById("nameLabel").style.fontSize = "12px";
        name.focus();
        return false; 
    }
    if (email =="") {
        document.getElementById("emailLabel").innerHTML = "please enter your email!";
        document.getElementById("emailLabel").style.color = "red";
        document.getElementById("emailLabel").style.fontSize = "12px";
        email.focus();
        return false; 
    }
    if (password =="") {
        document.getElementById("pLabel").innerHTML = "please enter your password!";
        document.getElementById("pLabel").style.color = "red";
        document.getElementById("pLabel").style.fontSize = "12px";
        password.focus();
        return false; 
    }
    if (password.length < 6) {
        document.getElementById("pLabel").innerHTML = "password should be at least 6 characters long!";
        document.getElementById("pLabel").style.color = "red";
        document.getElementById("pLabel").style.fontSize = "12px";
        password.focus();
        return false; 
    }
    if (confirmPassword !== password) {
        document.getElementById("cpLabel").innerHTML = "password does not match!";
        document.getElementById("cpLabel").style.color = "red";
        document.getElementById("cpLabel").style.fontSize = "12px";
        confirmPassword.focus();
        return false; 
    }
    return true;
}
