$(document).ready(function () {

  //toggler
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  })

  //sticky navbar
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position);
    
    if(position>= 740){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    }
    else{
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  //smooth scroll
  // $('.nav-item a').click(function(link){
  //   link.preventDefault();

  //   let target = $(this).attr('href');

  //   $('html, body').animate({
  //     scrollTop: $(target).offset().top -25
  //   }, 3000);
  // })




  // Magnific Popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
      enabled:true
    }
    // other options
  });
});

