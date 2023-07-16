import './index.html';
import './index.sass';
import { menu, burger, shadow, navigation, burgerLines, head, body, swiperReadMore, swiperContainer, swiperWrapper, swiperContainerService } from './modules/calc';

burger.addEventListener('click', changeColor);
swiperReadMore.addEventListener('click', readMoreAvailable);

function changeColor() {
    menu.classList.toggle('menu_active');
    burgerLines[0].classList.toggle('head__burger-line-change-1');
    burgerLines[1].classList.toggle('head__burger-line-change-2');
    burgerLines[2].classList.toggle('head__burger-line-change-3');
    navigation.classList.toggle('hidden');
    shadow.classList.toggle('hidden');
    head.classList.toggle('absolute-burger');
}

function initSlider() {
    new Swiper('.swiper-container', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1.25,
        spaceBetween: 16,
        centeredSlides: true,
    });
}


function detectDevice() {
    if(document.documentElement.clientWidth < 750){
      initSlider();
    }
}
detectDevice();  


function readMoreAvailable () {
    if(document.documentElement.clientWidth > 750 && document.documentElement.clientWidth < 1090){
        swiperContainer.classList.toggle('swiper-сontainer-height-more');
        swiperWrapper.children[6].classList.toggle('flexdisplay');
        swiperWrapper.children[7].classList.toggle('flexdisplay');
        swiperWrapper.classList.toggle('swiper-wrapper-height-more');
        swiperReadMore.firstElementChild.classList.toggle('imgtransform');
        swiperReadMore.lastElementChild.classList.toggle('displaynone');
        swiperReadMore.children[1].classList.toggle('flexdisplay');
    }else if(document.documentElement.clientWidth > 1100){
        swiperContainer.classList.toggle('swiper-сontainer-height-more');
        swiperWrapper.children[8].classList.toggle('flexdisplay');
        swiperWrapper.children[9].classList.toggle('flexdisplay');
        swiperWrapper.children[10].classList.toggle('flexdisplay');
        swiperWrapper.classList.toggle('swiper-wrapper-height-more');
        swiperReadMore.firstElementChild.classList.toggle('imgtransform');
        swiperReadMore.lastElementChild.classList.toggle('displaynone');
        swiperReadMore.children[1].classList.toggle('flexdisplay');
    }
}