var bg_image = document.getElementById('bg-image');
var button = document.getElementById('button');
var quote = document.getElementById('quote');
var author = document.getElementById('author');

var pictures = {
 0: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
 1: 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?cs=srgb&dl=bright-daylight-environment-240040.jpg&fm=jpg',
 2: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?cs=srgb&dl=board-cinema-cinematography-274937.jpg&fm=jpg',
 3: 'https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?cs=srgb&dl=accomplishment-action-adventure-461593.jpg&fm=jpg',
 4: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
 5: 'https://images.pexels.com/photos/6427/rucola-salad-plant-leaf.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
 6: 'https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?cs=srgb&dl=arches-architectural-design-architecture-135018.jpg&fm=jpg',
 7: 'https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
 8: 'https://images.pexels.com/photos/29435/landscape-sky-night-stars-29435.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
 9: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
}

function getQuote() {
  fetch('https://talaikis.com/api/quotes/random/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    $(quote).animate({
      opacity: 0
    }, 0,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);    
    });
    $(author).animate({
      opacity: 0
    }, 0,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);    
    });
    quote.innerHTML = myJson.quote;
    author.innerHTML = myJson.author;
    $('.twitter-share-button').attr('href', `https://twitter.com/intent/tweet?text=${myJson.quote}&hashtags=What%20A%20Quote!`);
  });
}

function displayImage() {
  var random_picture = pictures[Math.floor(Math.random() * 10)];
  $(bg_image).animate({
    opacity: 0
  }, 0,
  function() {
    $(this).animate({
      opacity: 1
    }, 500);    
  });
  $(bg_image).css("background-image", `url(${random_picture})`);
}

getQuote();
button.addEventListener('click', function() {
  getQuote();
  displayImage();
});

