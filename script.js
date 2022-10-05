



var changeColor = document.getElementById("button-Change-Colour");

changeColor.addEventListener("click" , function(){

    var randomNumber = Math.floor(Math.random()*5);
    
    var colors = ["color","color1","color2","color3","color4", ];
var randomColors = colors[randomNumber];

document.getElementById("color").setAttribute("id" , randomColors);
console.log(randomColors);


});




var changeShape = document.getElementById("button-Change-Shape");

changeShape.addEventListener("click" , function(){

    var randomNumber = Math.floor(Math.random()*5);
    
    var shaps = ["shape", "shape1","shape2","shape3","shape4", ];
var randomShaps = shaps[randomNumber];

document.getElementById("shape").setAttribute("id" , randomShaps);
console.log(randomShaps);


});