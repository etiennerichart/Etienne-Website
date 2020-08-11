function getNavHeight() {
  var elmnt = document.getElementsByTagName("nav")[0];
  var height = elmnt.offsetHeight;
  document.getElementsByTagName("header")[0].setAttribute("style", "margin-top: " + String(height) + "px");
}

function scrollY(y = 0) {
  window.scrollTo(0, y);
}