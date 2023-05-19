/* 
------------------------------------------ 
         Open And Close NavBar
------------------------------------------
*/
let iconOpen = document.querySelector('.open');
let iconClose = document.querySelector('.close');
let header = document.querySelector('header')

let rigthLinks = document.querySelector('.right-links')

function showSid() {
    iconOpen.onclick = function() {
        rigthLinks.style.cssText = `transform: scale(1); opacity: 100px; transition: .2s ease-out`
        iconOpen.style.opacity = '0'
        header.style.padding = '0px'
    }

    iconClose.onclick = function() {
        rigthLinks.style.cssText = `transform: scale(0); opacity: 0px;`
        iconOpen.style.opacity = '100%'
        header.style.padding = '0 20px'
    }
}
showSid()




/* 
------------------------------------------ 
        ADD Active Class About Every Link
------------------------------------------
*/
let links = document.querySelectorAll('.moveSection .container ul li a');

links.forEach((ele) => {
    ele.onclick = function() {

        links.forEach(function(el) {
            el.classList.remove('active')
        })

        this.classList.add('active')
    }
})






/* 
------------------------------------------ 
        Swiper Pages 
------------------------------------------
*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
});



/* 
------------------------------------------ 
        Start Effects For boxes
------------------------------------------
*/
const boxes = document.querySelectorAll(".effect");
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()







/* 
------------------------------------------ 
        Start Go UP
------------------------------------------
*/
var mybotton = document.getElementById('goup');

window.onscroll = function () {
    'user strict';
    if (window.pageYOffset >= 1000){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};

mybotton.onclick = function () {
    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    })

}
'user strict';
