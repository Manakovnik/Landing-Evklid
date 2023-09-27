
//---бургер меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function (){
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})


//---раскрытие меню поиска
let search = document.querySelector('.header__search-btn');
let searchForm = document.querySelector('.header__search');
let searchClosed = document.querySelector('.header__search-btn_close');

search.addEventListener('click', function() {
    searchForm.classList.toggle('header__search--active');
    search.classList.remove('header__search-btn--active');
})

searchClosed.addEventListener('click', function() {
    searchForm.classList.remove('header__search--active');
    search.classList.toggle('header__search-btn--active');
})


//--- удаляем логотип в header при открытом меню поиска и ширине экрана меньше 768px
let searchLogo = document.querySelector('.header__logo');
const mediaQuery = window.matchMedia('(max-width: 768px)');

if((mediaQuery.matches) && (search.addEventListener('click', function() { searchLogo.classList.remove('header__logo');

}))) {}


//--- табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

//---аккордион
new Accordion('.accordion-container');


//---свайпер
let swiper = new Swiper ('.swiper', {
slidesPerVew: 1,
loop: true,
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})













