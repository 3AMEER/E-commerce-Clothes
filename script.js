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



// Start Effects For boxes;
const boxes = document.querySelectorAll(".effect");
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 6) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()


// Swiper
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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });