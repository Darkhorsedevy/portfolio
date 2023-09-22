

function handleLight(params) {
    // document.getElementById("wrapper").style.setProperty("--primary-color", "white");
    // document.getElementById("body1").style.setProperty("--secondary-color", "chocolate");
    document.getElementById("moverBtn2").style.transform = "translateX(1%)";
    // document.getElementById("moverBtn").style.borderColor = "lightslategray";
    document.getElementById("moverBtn2").style.transition = "all 0.6s ease-in-out";
    document.getElementById("lightBtn2").style.backgroundColor = "lightslategray";
    document.getElementById("darkBtn2").style.backgroundColor = "lightslategray";
    // document.getElementById("toggle-container").style.backgroundColor = "lightslategray";
    // document.getElementById("h1").innerHTML = "Light Mode";
}
function handleDark(params) {
    // document.getElementById("wrapper").style.setProperty("--primary-color", "chocolate");
    // document.getElementById("body1").style.setProperty("--secondary-color", "#592d0d");
    // document.getElementById("moverBtn").style.borderColor = "var(--tertiary-color)";
    document.getElementById("moverBtn2").style.transform = "translateX(99%)";
    document.getElementById("moverBtn2").style.transition = "all 0.6s ease-in-out";
    document.getElementById("lightBtn2").style.backgroundColor = "var(--tertiary-color)";
    document.getElementById("darkBtn2").style.backgroundColor = "var(--tertiary-color)";
    // document.getElementById("toggle-container").style.backgroundColor = "#09a590";
    // document.getElementById("h1").innerHTML = "Dark Mode";
}