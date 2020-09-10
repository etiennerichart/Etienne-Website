function getRowWidth() {
    var elmnt = document.getElementsByClassName("row")[0];
    var width = elmnt.offsetWidth;
    return width;
}

function otherSkills() {
  var w = document.getElementById("otherskills");
  var width = document.offsetWidth - w.offsetWidth;
  var f = document.getElementById("icons");
  f.style.width = width;

}

function scrollAbout() {
  var y = document.getElementById("about").offsetTop - 65;
  scrollY(y);
}

function scrollExp() {
  var y = document.getElementById("experiences").offsetTop - 65;
  scrollY(y);
}

function scrollEdu() {
  var y = document.getElementById("education").offsetTop - 65;
  scrollY(y);
} 

function scrollOther() {
  var y = document.getElementById("other").offsetTop - 65;
  scrollY(y);
}

function scrollInter() {
  var y = document.getElementById("interests").offsetTop - 65;
  scrollY(y);
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
var b;
var dots = document.getElementsByClassName("dot");
var times = document.getElementsByClassName("myTimes");

function refreshSlides() {
  showSlides(slideIndex)
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
  if (n > 1) { timeIndex = 1 }
  if (n < 1) { timeIndex = 1 }
  for (i = 0; i < times.length; i++) {
    times[i].style.display = "none";
  }
  if (times.length > 0) {
    times[timeIndex - 1].style.display = "block";
  }
}
showTimes(timeIndex);

function showSlides(n) {
  var i;  
  var margins;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  else if (n < 1) { slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  dots[n - 1].classList.add("active");
  b = (getRowWidth() / 500)
  b = Math.floor(b)
  if (b > slides.length) {b = slides.length}
  else if (b < 1) {
    b = 1;
  } 
  margins = Math.floor((getRowWidth() - (500 * b)) / (b * 2)) - 1;
  for (i = 0; i < b; i++) {
    var slide = slides[slideIndex-1+i];
    if (slide){
      slide.style.display = "block";
      slide.setAttribute("style", "margin-left: " + String(margins) + "px; margin-right: " + String(margins) + "px");
    } else {
      slides[slideIndex-2+i].setAttribute("style", "margin: auto; float: unset");
    }
  }
  dots[slideIndex-1].classList.add("active");
  dotUpdate();
}

function dotUpdate() {
  var nm = dots.length - b;
  Array.prototype.forEach.call(dots, function(dot){
    dot.style.display = "none";
  });
  for (i = 0; i <= nm; i++){
    dots[i].style.display = "inline-block";
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