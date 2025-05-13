


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

let study1 = document.getElementById('study1');
let study2 = document.getElementById('study2');
let codi1 = document.getElementsByClassName('codi1')[0];
let codi2 = document.getElementsByClassName('codi2')[0];
let codi3 = document.getElementsByClassName('codi3')[0];
let codi4 = document.getElementsByClassName('codi4')[0];
let codi5 = document.getElementsByClassName('codi5')[0];
let codi6 = document.getElementsByClassName('codi6')[0];
let imageall = document.getElementsByClassName('imageall')[0];

// study1 클릭하면 codi1, codi2, codi3 보이게
study1.addEventListener('click', () => {
    codi1.style.transform = 'translateX(310px)';
    codi2.style.transform = 'translateX(620px)';
    codi3.style.transform = 'translateX(930px)';

    codi4.style.transform = 'translateX(0px)';
    codi5.style.transform = 'translateX(0px)';
    codi6.style.transform = 'translateX(0px)';
    imageall.style.display ='none';
});


// study2 클릭하면 codi4, codi5, codi6 보이게
study2.addEventListener('click', () => {
    codi4.style.transform = 'translateX(310px)';
    codi5.style.transform = 'translateX(620px)';
    codi6.style.transform = 'translateX(930px)';

    codi1.style.transform = 'translateX(0px)';
    codi2.style.transform = 'translateX(0px)';
    codi3.style.transform = 'translateX(0px)';
    imageall.style.display ='none';
    
});


var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 10,
      depth: 2000,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

    
    
    
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    speed:4000 ,
      autoplay: {
        delay:1000,
        disableOnInteraction: false,},
       
  });
    
  let qwas = document.getElementById('qwas');
  let qwer = document.getElementById('qwer');
  qwas.addEventListener('mouseenter', () => {
    qwer.style.display = 'block';
  });
  
  qwas.addEventListener('mouseleave', () => {
    qwer.style.display = 'none';
  });
