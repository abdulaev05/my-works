const container = document.querySelector('#carouselExampleControls');
const offers__galeryItems = document.querySelector('.offers__galeryItems');
const offers__galeryItem = document.querySelectorAll('.offers__galeryItem');
if(matchMedia){
  let screen = window.matchMedia('(max-width:992px)');
  screen.addEventListener('change' , function(){
    if(screen.matches){
      container.classList.add('carousel');
      container.classList.add('slide');
      offers__galeryItems.classList.add('carousel-inner');
      for(let i of offers__galeryItem){
        i.classList.add('carousel-item');
      }
    }
    else{
      container.classList.remove('carousel');
      container.classList.remove('slide');
      offers__galeryItems.classList.remove('carousel-inner');
      for(let i of offers__galeryItem){
        i.classList.remove('carousel-item');
      }
    }
  })
}
if(window.innerWidth < 992){
  container.classList.add('carousel');
  container.classList.add('slide');
  offers__galeryItems.classList.add('carousel-inner');
  for(let i of offers__galeryItem){
    i.classList.add('carousel-item');
  }
}