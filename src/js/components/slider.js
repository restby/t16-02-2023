import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.slider-trainers__btn--next',
    prevEl: '.slider-trainers__btn--prev',
  },
});
