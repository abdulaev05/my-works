window.onload = function addBrends(){
  const items = document.querySelector('.brends__items');
  const brendsName = ['Renault' , 'Skoda' , 'Nissan' , 'Toyota' , 'Citroen' , 'Mitsubishi' , 'Honda' ,
  'Chevrolet' , 'Peugeot' , 'Mazda' , 'Kia' , 'Volkswagen' , 'Suzuki' , 'Lada' , 'Chery' , 'Audi' , 'Opel' , 
  'Hyundai' , 'BMW' , 'Lexus' , 'Haval' , 'Ford']
  for(let i in brendsName){
    const linkItem = document.createElement('a');
    const item = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    linkItem.classList.add('brends__linkItem');
    item.classList.add('brends__item'); 

    item.append(img , p);
    linkItem.append(item)
    items.append(linkItem);

    linkItem.href = '#';
    img.src = `imgs/brends/${+i + 1}.png`;
    p.innerText = brendsName[i];
  }
  const imgBrend = document.createElement('img');
  const pButton = document.createElement('p');
  const linkButton = document.createElement('a');

  linkButton.classList.add('linkButton')

  linkButton.append(pButton ,imgBrend);
  items.append(linkButton);
  
  pButton.innerText = 'Смотреть все';
  imgBrend.src = 'imgs/other_menu.png'
    
  
  linkButton.addEventListener('click' , function(){
    imgBrend.classList.toggle('rotate180deg');
  })
}