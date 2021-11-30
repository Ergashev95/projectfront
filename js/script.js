$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 7,
        loop: true,
        responsive:{
            320:{
                items:3,
                loop: true,
               
            },
            576:{
                items:3,
                loop: true,
            },
            992:{
                items:7,
               
                loop:true
            }
        }
    });
  });
  