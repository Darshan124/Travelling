var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});



// on scroll animation effect start....................................................................................
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// on scroll animation effect start....................................................................................

// navbar sticky .....................................................................................................
const header = document.querySelector('.header')
window.addEventListener('scroll',fixheader)

function fixheader(){
  if(window.scrollY > header.offsetHeight +0){
    header.classList.add('active')
  }else{
    header.classList.remove('active')
  }
}


// menu-btn on click  ...................................................................................................
let navbar1 = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar1.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar1.classList.remove('active');
}

//search-form...........................................................................................................
let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.add('active');
}
document.querySelector('#close-search').onclick = () =>{
    searchFrom.classList.remove('active');
}

// window.onscroll =() =>{
//     navbar1.classList.remove('active');

//     if(window.scrollY>0){
//         document.querySelector('.header').classList.add('.active');
//     }else{
//             document.querySelector('.header').classList.remove('.active');
//     }
// }

//
// window.onload =() =>{

//     if(window.scrollY>0){
//         document.querySelector('.header').classList.add('.active');
//     }else{
//             document.querySelector('.header').classList.remove('.active');
//     }
// }


// var swiper = new Swiper(".home-slider", {
//     loop:true, 
//     grabCursor:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });


// product slider effect..........................................................................................
var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

// review slider effect...............................................................................................
var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

// blogs slider effect...............................................................................................
var swiper = new Swiper(".blogs-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

// clients slider effect...............................................................................................
var swiper = new Swiper(".clients-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
  },
});

