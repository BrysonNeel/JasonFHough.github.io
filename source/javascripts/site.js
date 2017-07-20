var min = .5; //Keep this variable public for toggleDarkLight to access it
function scrollingFade () { //The scrolling fade is in a function of its own to call it on page load, and when switching dark/light mode
  /* Fading between divs on scroll */
  $(window).scroll(function(){fade(true);});
  function fade(pageLoad) {
    var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
    var max=1, threshold=0.01;

    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;

      /* Fade element in/out based on its visible percentage */
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll
}

$(window).on("load",function() {
  (adsbygoogle = window.adsbygoogle || []).push({});
  scrollingFade();
});

/* Dark Mode Toggle */
function toggleDarkLight() {
  //Change the CSS styling
  var coloredRow = document.getElementById("body");
  var currentClass = coloredRow.className;
  coloredRow.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  //Changes the button's text to reflect the mode change
  if (currentClass == "dark-mode") {
    buttonText = "Switch to Dark Mode";
    min = .5;
    scrollingFade();
  } else {
    buttonText = "Switch to Light Mode";
    min = .9;
    scrollingFade();
  }
  document.getElementById("dark_light").innerText = buttonText;
}
