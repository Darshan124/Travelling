var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

var a = document.getElementById('foo1');
document.addEventListener('click', function(ev){
    a.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    a.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

var b = document.getElementById('foo2');
document.addEventListener('click', function(ev){
    b.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    b.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

var c = document.getElementById('foo3');
document.addEventListener('click', function(ev){
    c.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    c.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

var d = document.getElementById('foo4');
document.addEventListener('click', function(ev){
    d.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    d.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

const header = document.querySelector('.header')
window.addEventListener('scroll',fixheader)

function fixheader(){
  if(window.scrollY > header.offsetHeight +00){
    header.classList.add('active')
  }else{
    header.classList.remove('active')
  }
}

let navbar1 = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar1.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar1.classList.remove('active');
}

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

window.onload =() =>{

    if(window.scrollY>0){
        document.querySelector('.header').classList.add('.active');
    }else{
            document.querySelector('.header').classList.remove('.active');
    }
}


var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

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

