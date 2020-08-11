function getNavHeight() {
  var elmnt = document.getElementsByTagName("nav")[0];
  var height = elmnt.offsetHeight;
  document.getElementsByTagName("header")[0].setAttribute("style", "margin-top: " + String(height) + "px");
}

function getRowWidth() {
    var elmnt = document.getElementsByClassName("row")[0];
    var width = elmnt.offsetWidth;
    return width;
}

var maxHeight = 0;

function setMaxProjectHeight() {
  var i;
  var cards = document.getElementsByClassName("card");
  maxHeight = 0;
  for(i = 0; i < cards.length; i++) {
    cards[i].style.height = "auto";
    if (maxHeight < cards[i].offsetHeight) {
      maxHeight = cards[i].offsetHeight;
    }
  }
  for(i = 0; i < cards.length; i++) {
    cards[i].style.height = String(maxHeight) + "px";
  }
}

function scrollExtra() {
  setTimeout(document.body.scrollTop += 100, 10000);
}

function toggleGifs() {
  var checkGif = document.getElementById("gifSwitch");
  var gifs = document.getElementsByClassName("gif");
  var i;
  if (checkGif.checked == true) {
    for (i = 0; i < gifs.length; i++){
      gifs[i].style.display = "block";
    }
  }
  else {
    for (i = 0; i < gifs.length; i++){
      gifs[i].style.display = "none";
    }
  }
}

var timeIndex = 1;
var slideIndex = 1;

showTimes(timeIndex);

function refreshSlides() {
  showSlides(timeIndex)
}

function refreshTimes() {
  showTimes(timeIndex)
}

function plusTime(n) {
  showTimes(timeIndex += n);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentTime(n) {
  showTimes(timeIndex = n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showTimes(n) {
  var i;
  var times = document.getElementsByClassName("myTimes");
  if (n > 1) { timeIndex = 1 }
  if (n < 1) { timeIndex = 1 }
  for (i = 0; i < times.length; i++) {
    times[i].style.display = "none";
  }
  if (times.length > 0) {
    times[timeIndex - 1].style.display = "block";
  }
}

var b;

function showSlides(n) {
  var i;  
  var margins;
  var dots = document.getElementsByClassName("dot");
  var slides = document.getElementsByClassName("mySlides");
  if (n > 2) { slideIndex = 1 }
  if (n < 1) { slideIndex = 2 }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  dots[n - 1].classList.add("active");
  b = (getRowWidth() / 500)
  b = Math.floor(b)
  if (b > 2) {b = 2}
  if (b < 1) {
    b = 1;
  } 
  margins = Math.floor((getRowWidth() - (500 * b)) / (b * 2)) - 1;
  for (i = 0; i < b; i++) {
    slides[slideIndex-1+i].style.display = "block";
    slides[slideIndex-1+i].setAttribute("style", "margin-left: " + String(margins) + "px; margin-right: " + String(margins) + "px");
  }
  
}
function dotUpdate(numDots) {
  var nm = numDots;
  var dots = document.getElementsByClassName("prevnext")[0];
  if (nm == b) {
    dots.style.display = "none";
  }
  else {
    dots.style.display = "block";
  }
}

function dropdowns() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var isExperience = this.classList.contains("experience");
      if (isExperience) {
        var card = this.parentNode.parentNode;
      }
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        if (isExperience) {
          setTimeout(function() {
            card.style.height = String(maxHeight) + "px";
          }, 200);
        }
      } 
      else {
        content.style.maxHeight = content.scrollHeight + "px";
        if (isExperience) {
          card.style.height = "auto";
        }
      } 
    });
  }
}