

function handleLightMode(params) {
    document.getElementById("moverBtn").style.transform = "translateX(1%)";
    document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
    document.getElementById("lightBtn").style.backgroundColor = "lightslategray";
    document.getElementById("darkBtn").style.backgroundColor = "lightslategray";
    document.querySelector(':root').setAttribute('style', '--post-text-color:#444;--box-shadow: 3px 3px 20px 3px gray;');
    document.body.style.backgroundColor = "transparent";
}
function handleDarkMode(params) {
    if (document.title ==='Projects Page' || document.title ==='Home Page') {
        document.getElementById("moverBtn").style.transform = "translateX(99%)";
        document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
        document.getElementById("lightBtn").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("darkBtn").style.backgroundColor = "var(--secondary-color)";
        document.querySelector(':root').setAttribute('style', '--post-text-color:white;--box-shadow: 1px 2px 10px 2px var(--tertiary-color);--text-backround: var(--tertiary-color);--banner-text-color: white;');
        document.getElementById('pop-up-div').style.backgroundColor ="black";
        document.body.style.backgroundColor = "black";
    } else {
        document.getElementById("moverBtn").style.transform = "translateX(99%)";
        document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
        document.getElementById("lightBtn").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("darkBtn").style.backgroundColor = "var(--secondary-color)";
        document.querySelector(':root').setAttribute('style', '--post-text-color:white;--box-shadow: 1px 2px 10px 2px var(--tertiary-color);--text-backround: var(--tertiary-color);--banner-text-color: white;');
        document.body.style.backgroundColor = "black";
    }
    
}