let count = 0;
document.getElementById("decreaseBtn").onclick = function (params) {
    count--;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function (params) {
    count++;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function (params) {
    count = 0;
    document.getElementById("myLabel").innerHTML = count;
}
