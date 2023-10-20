(function($){
    // variables
    elementWidth = $('ul').width(),
    containerWidth = $('nav').width(),
    difference = elementWidth-containerWidth,
    finalWidth = difference * 1.5,
    element = $('ul');
    
    // active on click
    $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
    });
    
  })(jQuery);
  
  function scrollToElement() {
    var element = document.getElementById('targetElement'); 
    element.scrollIntoView({behavior: 'smooth'});
    
}


document.getElementById('targetElement').addEventListener('click', event=>{
  console.log(event);
}) 

function scrollToElement1() {
  var element = document.getElementById('targetElements'); 
  element.scrollIntoView({behavior: 'smooth'});
  
}

function scrollToElement2() {
  var element = document.getElementById('targetElemente'); 
  element.scrollIntoView({behavior: 'smooth'});
  
}
// -------------------------------------------

const button = document.querySelector('.scroll-down-btn');
const header = document.getElementById('targetElement');


window.addEventListener('scroll', function() {
  if (window.scrollY >= 786) headePositionFixed();  
  else headePositionRelative();
});

function headePositionFixed() {
  header.style.position = 'fixed';
  header.style.top = '0';
}

function headePositionRelative() {header.style.position = 'relative';}


// ----------------------------------------------
