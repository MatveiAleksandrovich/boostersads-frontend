// Модальные окна

const popUpMask = document.getElementById('pop-up-mask');

const openPopUpUrgetLaunch = document.getElementById('button-urgent-launch');
const closePopUpUrgetLaunch = document.getElementById('pop-up-close-urgent-launch');
const popUpBodyUrgetLaunch = document.getElementById('pop-up-body-urgent-launch');

const openPopUpContact = document.getElementById('button-contact');
const openPopUpContact2 = document.getElementById('button-contact2');
const openPopUpContact3 = document.getElementById('button-contact3');
const openPopUpContact4 = document.getElementById('button-contact4');
const openPopUpContact3Mob = document.getElementById('button-contact3-mob');
const openPopUpContact4Mob = document.getElementById('button-contact4-mob');
const closePopUpContact = document.getElementById('pop-up-close-contact');
const popUpBodyContact = document.getElementById('pop-up-body-contact');

const openPopUpSlide1 = document.getElementById('slide1');
const popUpSlide1 = document.getElementById('pop-up-slide1');
const closePopUpSlide1 = document.getElementById('pop-up-close-slide1');

const openPopUpSlide2 = document.getElementById('slide2');
const popUpSlide2 = document.getElementById('pop-up-slide2');
const closePopUpSlide2 = document.getElementById('pop-up-close-slide2');

const openPopUpSlide3 = document.getElementById('slide3');
const popUpSlide3 = document.getElementById('pop-up-slide3');
const closePopUpSlide3 = document.getElementById('pop-up-close-slide3');

const openPopUpSlide4 = document.getElementById('slide4');
const popUpSlide4 = document.getElementById('pop-up-slide4');
const closePopUpSlide4 = document.getElementById('pop-up-close-slide4');

const openPopUpSlide5 = document.getElementById('slide5');
const popUpSlide5 = document.getElementById('pop-up-slide5');
const closePopUpSlide5 = document.getElementById('pop-up-close-slide5');

const openPopUpSlide6 = document.getElementById('slide6');
const popUpSlide6 = document.getElementById('pop-up-slide6');
const closePopUpSlide6 = document.getElementById('pop-up-close-slide6');

const openPopUpSlide7 = document.getElementById('slide7');
const popUpSlide7 = document.getElementById('pop-up-slide7');
const closePopUpSlide7 = document.getElementById('pop-up-close-slide7');

const openPopUpSlide8 = document.getElementById('slide8');
const popUpSlide8 = document.getElementById('pop-up-slide8');
const closePopUpSlide8 = document.getElementById('pop-up-close-slide8');

const openPopUpSlide9 = document.getElementById('slide9');
const popUpSlide9 = document.getElementById('pop-up-slide9');
const closePopUpSlide9 = document.getElementById('pop-up-close-slide9');


popUpMask.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpBodyUrgetLaunch.classList.remove('open');
    popUpBodyContact.classList.remove('open');
    popUpSlide1.classList.remove('open-slide');
    popUpSlide2.classList.remove('open-slide');
    popUpSlide3.classList.remove('open-slide');
    popUpSlide4.classList.remove('open-slide');
    popUpSlide5.classList.remove('open-slide');
    popUpSlide6.classList.remove('open-slide');
    popUpSlide7.classList.remove('open-slide');
    popUpSlide8.classList.remove('open-slide');
    popUpSlide9.classList.remove('open-slide');
});

openPopUpUrgetLaunch.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyUrgetLaunch.classList.add('open');
});
closePopUpUrgetLaunch.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpBodyUrgetLaunch.classList.remove('open');
});

openPopUpContact.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});
openPopUpContact2.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});
openPopUpContact3.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});
openPopUpContact4.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});

openPopUpContact3Mob.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});
openPopUpContact4Mob.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpBodyContact.classList.add('open');
});

closePopUpContact.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpBodyContact.classList.remove('open');
});

openPopUpSlide1.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide1.classList.add('open-slide');
});
closePopUpSlide1.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide1.classList.remove('open-slide');
});

openPopUpSlide2.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide2.classList.add('open-slide');
});
closePopUpSlide2.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide2.classList.remove('open-slide');
});

openPopUpSlide3.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide3.classList.add('open-slide');
});
closePopUpSlide3.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide3.classList.remove('open-slide');
});

openPopUpSlide4.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide4.classList.add('open-slide');
});
closePopUpSlide4.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide4.classList.remove('open-slide');
});

openPopUpSlide5.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide5.classList.add('open-slide');
});
closePopUpSlide5.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide5.classList.remove('open-slide');
});

openPopUpSlide6.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide6.classList.add('open-slide');
});
closePopUpSlide6.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide6.classList.remove('open-slide');
});

openPopUpSlide7.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide7.classList.add('open-slide');
});
closePopUpSlide7.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide7.classList.remove('open-slide');
});

openPopUpSlide8.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide8.classList.add('open-slide');
});
closePopUpSlide8.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide8.classList.remove('open-slide');
});

openPopUpSlide9.addEventListener('click', function(e) {
    e.preventDefault();
    popUpMask.classList.add('open');
    popUpSlide9.classList.add('open-slide');
});
closePopUpSlide9.addEventListener('click', () => {
    popUpMask.classList.remove('open');
    popUpSlide9.classList.remove('open-slide');
});

// Индикатор скролла страницы

window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Мобильное меню

$('.mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.menu').toggleClass('menu-active');
    $('.breakpoint').on('click', function() {
        $('.menu-btn').removeClass('menu-active');
        $('.menu').removeClass('menu-active');
    })
});

// Меню плавный скролл
$(".menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);

});
var t;

function up() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout('up()', 37);
    } else clearTimeout(t);
    return false;
}

/* Toggle на моб версии блок Услуги*/
$('.button-more1').click(function(event) {
    event.preventDefault();
    $('.services-mob-toggle1').toggleClass('active');
    if ($('.button-more1').text() == 'Подробнее') {
        $('.button-more1').text('Закрыть');
    } else {
        $('.button-more1').text('Подробнее');
    }

});
$('.button-more2').click(function(event) {
    event.preventDefault();
    $('.services-mob-toggle2').toggleClass('active');
    if ($('.button-more2').text() == 'Подробнее') {
        $('.button-more2').text('Закрыть');
    } else {
        $('.button-more2').text('Подробнее');
    }
});

/* Модальное окно спасибо */
$('#thanks-mask').click(function() {
    $(this).removeClass('open');
    $('#thanks-body').removeClass('open');

});
$('#thanks-close').click(function() {
    $('#thanks-mask').removeClass('open');
    $('#thanks-body').removeClass('open');
})