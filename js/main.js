// alert('hola');
var index = 0;

    var listaimg = ["./images/sienaPortada.jpg", "./images/catania2.jpg", "./images/catania3.jpg", "./images/catania4.jpg", "./images/milan2.jpg", "./images/catania8.jpg", "./images/catania9.jpg", "./images/catania11.jpg", "./images/catania12.jpg", "./images/catania14.jpg", "./images/catania15.jpg", "./images/catania16.jpg", "./images/catania10.jpg", "./images/catania17.jpg", "./images/portada3.jpg"];

function interval(){
  setInterval(changeImage, 3000);
};

function changeImage() {
  
  var caja = document.getElementById('imagePortada')  
   caja.style.backgroundImage = `url(${listaimg[index]})`;
   caja.style.transition = '1s all ease-in-out'
//    css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 15)
      index = 0;
     
}
interval();
//menu
const menu = document.querySelector('.menu');
console.log(menu)
const menuButton = document.querySelector('.icon-list');
console.log(menuButton)
function hideShow(){
    menu.classList.toggle('is-active');
}

menuButton.addEventListener('click', hideShow);



