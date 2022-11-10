// navbar
var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});


$('.bi.bi-list').click(function(){
  $(this).toggleClass('bi-list')
  $(this).toggleClass('bi-chevron-left')
})




// banner slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

// AOS init
AOS.init();

// Precounter
new PureCounter();


// whyUsSwiper
var swiper = new Swiper(".whyUsSwiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

// clientsSwiper
var swiper = new Swiper(".clientsSwiper",  {
  slidesPerView: 3.2,
  slidesPerColumn: 3,
  spaceBetween: 30,
  slidesToScroll: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function () {},
    orientationchange: function(){},
    beforeResize: function(){
      let vw = window.innerWidth;
      if(vw > 1000){
        mySwiper.params.slidesPerView = 3
          mySwiper.params.slidesPerColumn = 3
      } else {
        mySwiper.params.slidesPerView = 4
          mySwiper.params.slidesPerColumn = 2
      }
      mySwiper.init();
    },
  },
});

var swiper = new Swiper(".clientsSwiper-second",  {
  slidesPerView: 3.5,
  slidesPerColumn: 3,
  spaceBetween: 30,
  slidesToScroll: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function () {},
    orientationchange: function(){},
    beforeResize: function(){
      let vw = window.innerWidth;
      if(vw > 1000){
        mySwiper.params.slidesPerView = 3
          mySwiper.params.slidesPerColumn = 3
      } else {
        mySwiper.params.slidesPerView = 4
          mySwiper.params.slidesPerColumn = 2
      }
      mySwiper.init();
    },
  },
});



// mobile only slider only in mobile
mobileOnlySlider(".mob-only-slider", true, false, 990);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: false,
    infinite: true,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} 

mobileOnlySlider(".mob-only-slider", true, false, 480);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: false,
    infinite: true,
    slidesToShow: 1.03,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} 


// fixed footer
function footer_behind_ctn(){
  var footerHeight = $('.footer').outerHeight();
  $('.footer-top-section').css('margin-bottom', footerHeight);
}

$(document).ready(footer_behind_ctn);
$(window).resize(footer_behind_ctn);



// clients mobile view second slider
$(window).on("resize", function () {
  if ($(window).width() < 992) {
   $('.clients .d-none').addClass('view')
  }else{
    $('.clients .d-none').removeClass('view')
  }
});
