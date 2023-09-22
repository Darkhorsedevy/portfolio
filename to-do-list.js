//create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("li");

var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);

    myNodeList[i].appendChild(span);
    
}

//click on a close button to hide the current list item
var closes = document.getElementsByClassName("close");
var i;
for (let i = 0; i < closes.length; i++) {
    closes[i].onclick = function (params) {
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}

//add a "checked" symbol when clicking on a list item
var list = document.querySelector("ol");
list.addEventListener("click", function (ev) {
    if (ev.target.tagname === "li"){
        ev.target.classList.toggle("checked");
    }
}, false);


//create a new list item when clicking on the "Add" button
function newElement(params) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("you must write something!")
    } else {
        document.getElementById("myOL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (let i = 0; i < closes.length; i++) {
        closes[i].onclick = function (params) {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}