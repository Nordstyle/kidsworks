/**
 * Закрепленное к верху меню навигации
 */
const fixedNavigationMenu = () => {
  const navigation = document.querySelector('.header');
  window.onscroll = () => {
    if(window.pageYOffset > 10) {
      navigation.style.backgroundColor = 'rgba(255,255,255,0.9)';
      navigation.style.paddingTop = '1rem';
      navigation.style.paddingBottom = '1rem';
    } else {
      navigation.style.backgroundColor = '';
      navigation.style.paddingTop = '';
      navigation.style.paddingBottom = '';
    }
  }
};
fixedNavigationMenu();

const swiper = new Swiper('.mainSlider .swiper-container', {
  slidesPerView: 1.8,
  loopAdditionalSlides: 2,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.mainSlider.swiper-button-next',
    prevEl: '.mainSlider.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    660: {
      slidesPerView: 1
    },
  }
});

//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  offset: 100
});




const options = {
  slidesPerView: 6,
  freeMode: true,
  navigation: {
    prevEl: '.DoubleSlider .swiper-button-next',
    nextEl: '.DoubleSlider .swiper-button-prev'
  },
  breakpoints: {
    667: {
      slidesPerView: 2,
    }
  }
}
const options2 = {
  ...options,
  slidesPerView: 5

}

new Swiper('.DoubleSlider__slider1', options)
new Swiper('.DoubleSlider__slider2', options2)