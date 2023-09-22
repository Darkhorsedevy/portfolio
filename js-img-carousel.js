let counter = 1;
setInterval(function (params) {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter=1;
    }
}, 3000);