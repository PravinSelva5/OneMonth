/* 1. Grab the input */

document.querySelector(".js-go").addEventListener('click', function(){
    var input = document.querySelector("input").value;
    pushToDOM(input);

});


document.querySelector(".js-userinput").addEventListener('keyup', function(){
    var input = document.querySelector("input").value;
    
    if (event.which === 13) {
        pushToDOM(input);
    };
});


/* 2. Do the data stuff with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(event) {

    var data = event.target.response;
    pushToDOM(data);
});


/* 3. Show me the GIFs */

function pushToDOM(input){
    var response = JSON.parse(input);

    var imageUrl = response.data;

    imageUrl.forEach(function(image){
        var src = image.images.fixed_height.url;
        var container = document.querySelector(".js-container");    
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });



}