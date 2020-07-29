
var userInput = prompt("Hello, which decade do you want to watch a film in? (1990, 2000, 2010, 2020)");

var movies_1990 = [
    "Pulp Fiction by Quentin Tarantino ",
    "Goodfellas by Martin Scorsese",
    "Fargo by Joel Coen & Ethan Coen",
    "L.A. Confidential by Curtis Hanson",
    "The Big Lebowski by Joel Coen & Ethan Coen",
    "Saving Private Ryan by Steven Spielberg",
    "Fight Club by David Fincher",
    "The Silence of the Lambs by Jonathan Demme",
    "Magnolia by Paul Thomas Anderson"
];

var movies_2000 = [
    "Gladiator by Ridley Scott",
    "The Dark Knight by Christopher Nolan",
    "Slumdog Millionaire by Danny Boyle & Loveleen Tandan",
    "The Departed by Martin Scorsese",
    "The Lord of the Rings: The Return of the King by Peter Jackson",
    "Pan's Labyrinth by Guillermo del Toro",
    "Blood Diamond by Edward Zwick",
    "City of God by Fernando Meirelles & Kátia Lund",
    "Finding Nemo by Andrew Stanton & Lee Unkrich",
    "No Country for Old Men by Ethan Coen & Joel Coen"
];

var movies_2010 = [
    "Inception by Christopher Nolan",
    "Life Cycles by Derek Frankowski & Ryan Gibb",
    "Shutter Island by Martin Scorsese",
    "Incendies by Denis Villeneuve",
    "Of Gods and Men by Xavier Beauvois",
    "Four Lions by Christopher Morris",
    "Exit Through the Gift Shop by Banksy",
    "127 Hours by Danny Boyle",
    "Toy Story 3 by Lee Unkrich",
    "The Social Network by David Fincher"
];

var movies_2020 = [
    "Red Notice by Rawson Marshall Thurber",
    "Star Wars: Fate of the Force by Stephen C. Bastian",
    "Black Fury by Stanley V. Henson Jr.",
    "Godzilla vs. Kong by Adam Wingard",
    "No Time to Die by Cary Joji Fukunaga",
    "Den of Thieves 2: Pantera by Christian Gudegast",
    "The Hitman's Wife's Bodyguard by Patrick Hughes"
];

if (userInput === "1990"){
    const movie = Math.floor(Math.random() * movies_1990.length);
    var p = document.createElement('p');
    p.innerHTML = movies_1990[movie];
    var output = document.getElementById("movie-name");
    output.appendChild(p);
}
else if (userInput === "2000"){
    const movie = Math.floor(Math.random() * movies_2000.length);
    var p = document.createElement('p');
    p.innerHTML = movies_2000[movie];
    var output = document.getElementById("movie-name");
    output.appendChild(p);
}

else if (userInput === "2010"){
    const movie = Math.floor(Math.random() * movies_2010.length);
    var p = document.createElement('p');
    p.innerHTML = movies_2010[movie];
    var output = document.getElementById("movie-name");
    output.appendChild(p);
}

else if (userInput === "2020"){
    const movie = Math.floor(Math.random() * movies_2020.length);
    var p = document.createElement('p');
    p.innerHTML = movies_2020[movie];
    var output = document.getElementById("movie-name");
    output.appendChild(p);
}

else {
    var p = document.createElement('p');
    p.innerHTML = "Please Refresh and input the appropriate year!"
    var output = document.getElementById("movie-name");
    output.appendChild(p);
}