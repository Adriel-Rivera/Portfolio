function whoJoe(){
  alert("Joe MAMA. EYYYYYYYYYYYY");
}

function sayHello(){
  var x = Math.floor(Math.random() * 4);
  var names = [" Nathan", " Luke", " Adriel", " Cody"];
  alert("Hello" + names[x] + "!");
}

window.onload = function(){
  document.getElementById("testButton").onclick = whoJoe;
  document.getElementById("sayHello").onclick = sayHello;
};

