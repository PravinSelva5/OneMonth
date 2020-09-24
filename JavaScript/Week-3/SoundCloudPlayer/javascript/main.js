/* 1. Search */





/* 2. Query Soundcloud API */

var soundCloudAPI = {};

soundCloudAPI.init = function() {
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
}

soundCloudAPI.init();

soundCloudAPI.getTrack = function(inputValue) {
  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: inputValue
  }).then(function(tracks) { 
    console.log(tracks);
    soundCloudAPI.renderTracks(tracks);
  });
}

soundCloudAPI.getTrack("tory lanez");


soundCloudAPI.renderTracks = function(tracks) {

    tracks.forEach(function(track) {
        
      //Creating a div for a new card and appending it into html
      var card = document.createElement('div');
      card.classList.add('card');

      // image
      var cardImage = document.createElement('div');
      cardImage.classList.add('image');

      var image_img = document.createElement('img');
      image_img.classList.add('image_img');
      image_img.src = track.artwork_url || 'http://lorempixel.com/400/200/';

      cardImage.appendChild(image_img);

      // content 
      var content = document.createElement('div');
      content.classList.add('content');

      var header = document.createElement('div');
      header.classList.add('header');
      header.innerHTML = '<a href=" '+ track.permalink_url +' target="_blank">'+ track.title +'</a>';

      // button
      var button = document.createElement('div');
      button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

      var icon = document.createElement('i');
      icon.classList.add('add', 'icon');

      var buttonText = document.createElement('span');
      buttonText.innerHTML = 'Add to playlist';


      // APPEND CHILD
      content.appendChild(header);

      button.appendChild(icon);
      button.appendChild(buttonText);

      card.appendChild(cardImage);
      card.appendChild(content);
      card.appendChild(button);

      var searchResults = document.querySelector('.js-search-results');
      searchResults.appendChild(card);
});

}





/* 3. Display the cards */





/* 4. Add to playlist and play */