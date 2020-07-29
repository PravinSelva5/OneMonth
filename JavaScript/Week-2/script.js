console.log("We good?");

var a = document.querySelector(".howareyou");
var reset = document.querySelector(".reset");

a.addEventListener("click", function() {
    var h1 = document.querySelector("h1");
    h1.innerHTML = "I'm alive";
    console.log(h1);
});

reset.addEventListener("click", function(){
    var h1 = document.querySelector("h1");
    h1.innerHTML = "Hey JavaScript, how ya feeling?";
    console.log(h1);

})
