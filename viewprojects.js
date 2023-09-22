document.getElementById("to-do-list-container").style.display = "none";
document.getElementById("pop-up-div").style.display = "none";
document.getElementById("number-counter-container").style.display = "none";
document.getElementById("digital-clock-container").style.display = "none";
document.getElementById("calculator-container").style.display = "none";
document.getElementById("form-validation-container").style.display = "none";


function removePopUp(params) {
    document.getElementById("pop-up-div").style.display = "none";
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
}

function numberCounter(params) {
    document.getElementById("number-counter-container").style.display = "block";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "none";
}

function digitalClock(params) {
    document.getElementById("digital-clock-container").style.display = "block";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "none";
}
function calculator(params) {
    document.getElementById("calculator-container").style.display = "block";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "none";
}

function formValidation(params) {
    document.getElementById("form-validation-container").style.display = "block";
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "none";
}
function toDoList(params) {
    document.getElementById("to-do-list-container").style.display = "block";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "none";
}
function toggleSwitch(params) {
    document.getElementById("to-do-list-container").style.display = "none";
    document.getElementById("pop-up-div").style.display = "block";
    document.getElementById("number-counter-container").style.display = "none";
    document.getElementById("digital-clock-container").style.display = "none";
    document.getElementById("calculator-container").style.display = "none";
    document.getElementById("form-validation-container").style.display = "none";
    document.getElementById("toggle-switch-container").style.display = "block";
}

//i have to think of a cleaner way to write all these code.