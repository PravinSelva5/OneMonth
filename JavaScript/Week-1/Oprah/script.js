/* this is an event*/
// this is a single line comment in Javascript
//alert("I'm annoying");
//to print anything to the screen
            
var username = prompt("Hello, who are you?");

// Image factory
var createImage = function(src, title) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    return img; 
  };
  
  // array of images
  var images = [];
  
  // push two images to the array
  images.push(createImage("./images/bmw.jpg", "BMW"));
  images.push(createImage("./images/maserati.jpg", "Maserati"));
  images.push(createImage("./images/saab.jpeg", "Saab"));
  
  var car = images[Math.floor(Math.random() * images.length)];


 if (username === "Chris" || username === "Pravin" ){
        document.write("<h1>Hello " + username + " you won a " + car.title + "!</h1>");
        for (var i=0; i < images.length; i++){
            if (car.title === images[i].title){
                if(i === images.length){
                    document.getElementById("car-image").src = null;
                    break;
                }
                document.body.appendChild(images[i].src);
            }
        }

}
else {
        document.write("<h1>Hello " + username + "!</h1>");
}

