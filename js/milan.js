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
//seleccion del contenedor del Box Slice
var ConteBox = document.querySelector('.boxSliceContainer');
//seleccion del boxSlice
var boxSlice = document.getElementById('boxSlice');
boxSlice.classList.add('none');//Esto para el fade de las imagenes
console.log(boxSlice);
//seleccion de fotos 
var milanes = ['./images/milan.jpg', './images/milan2.jpg', './images/milan3.jpg', './images/milan4.jpg', './images/milan5.jpg'];

//Creacion del evento que dispara las funciones
flechaDe.addEventListener('click', sliceIz);
flechaIz.addEventListener('click', sliceDe);

//funciones principales
var color;
var contador = 0;
function condicionesCon(){
   
    if(contador == -1){
        contador = 4;
    }
    else if(contador == 5){
        contador = 0;
        
    }
    // debugger;
  
}

function cambiaColor(){

switch(contador){
    case 0:
    color = '#FF793E';
    break;
    case 1:
    color = '#F9DB65';
    break;
    case 2:
    color = '#D7B85D';
    break;
    case 3:
    color = '#FE8129';
    break;
    case 4:
    color = '#ACFE04';
    break;
}


}

function sliceIz(){

    cambiaColor();
    console.log(contador);
    ConteBox.style.backgroundColor = color;
    ConteBox.style.transition = '.2s all ease-in-out';
    boxSlice.style.backgroundImage = `url(${milanes[contador]})`;
    boxSlice.classList.replace('none','fadeInRight' );
    contador = contador - 1;
    condicionesCon();
    setTimeout(fadeImages, 300);
}

function sliceDe(){
    cambiaColor();
    console.log(contador);
    ConteBox.style.backgroundColor = color;
    ConteBox.style.transition = '.2s all ease-in-out';
    boxSlice.style.backgroundImage = `url(${milanes[contador]})`;
    boxSlice.classList.replace('none', 'fadeInLeft');
    contador = contador + 1;
    condicionesCon();
    setTimeout(fadeImages, 300);
    
}
function fadeImages(){
    if (boxSlice.classList.value == 'boxSlice fadeInLeft'){
        boxSlice.classList.replace('fadeInLeft', 'none');
        
        console.log('entre');
    }
    if (boxSlice.classList.value == 'boxSlice fadeInRight'){
        boxSlice.classList.replace('fadeInRight', 'none');
        console.log('entre');
    }
 
}



