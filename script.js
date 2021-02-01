var div = document.createElement("div");
div.style.border = "2px solid black";
div.style.width = "200px";
div.style.height = "300px";

var line = document.createElement("br");
var button = document.createElement("button");
button.innerHTML = "Change Background Color";
button.onclick = changeColor;
document.body.append(div, line, button);

function changeColor() {
  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  div.style.background = color;
}

