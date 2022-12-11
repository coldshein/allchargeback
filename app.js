const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
const popupHelper = document.querySelector('.popup-helper');
const popupWindow = document.querySelector('.popup');

function openPopup() {
    popupWindow.classList.toggle('active-popup');
    popupHelper.classList.toggle('active-helper');
}

popupHelper.addEventListener('click', openPopup);

if(window.innerWidth <= 980){
  swiper.params.slidesPerView = 1;
} else {
  swiper.params.slidesPerView = 2;
}

window.onresize = resize;
function resize(){
  if(window.innerWidth <= 980){
    swiper.params.slidesPerView = 1;
  } else {
    swiper.params.slidesPerView = 2;
  }
}
