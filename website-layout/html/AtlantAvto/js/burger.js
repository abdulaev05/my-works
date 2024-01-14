const burgerClick = document.querySelector('.burger');
burgerClick.addEventListener('click' , function(e){
  e.preventDefault;
  burgerClick.classList.toggle('burger_active');
})