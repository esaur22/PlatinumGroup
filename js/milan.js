//menu
const menu = document.querySelector('.menu');
// console.log(menu)
const menuButton = document.querySelector('.icon-list');
// console.log(menuButton)
function hideShow(){
    menu.classList.toggle('is-active');
}
menuButton.addEventListener('click', hideShow);

//<------BOX SLICE-------->//

//Seleccion de los botones
var flechaIz = document.getElementById('flechaIz');
var flechaDe = document.getElementById('flechaDe');
//seleccion del boxSlice
var boxSlice = document.getElementById('boxSlice');
console.log(boxSlice);
//seleccion de fotos 
var milanes = ['./images/milan.jpg', './images/milan2.jpg']

//Creacion del evento que dispara las funciones
flechaDe.addEventListener('click', sliceIz);
flechaIz.addEventListener('click', sliceDe);

//funciones principales
var contador = 0;
function condicionesCon(){
    if(contador == -1){
        contador = 1;
    }
    else if(contador == 2){
        contador = 0;
        
    }

}


function sliceIz(){
  
    boxSlice.style.backgroundImage = `url(${milanes[contador]})`;
    boxSlice.style.animationName= 'fadeInLeft' 
    contador = contador - 1
    condicionesCon()
}

function sliceDe(){
   
    boxSlice.style.backgroundImage = `url(${milanes[contador]})`;
    contador = contador + 1
    condicionesCon()
}


