function giramos(){
   this.classList.add("mola")
 if(!volteada){
   volteada=true;
   primera =this;
   return;/// muy importante el return, si no, se vuelve a ejecutar la funcion asignando el primero a otra carta
 }else{ volteada=false;
 segunda=this}
comparar();
         }

function comparar(){
  let haymatch = primera.dataset.num == segunda.dataset.num;
haymatch ? adiosListen()+ console.log("bingo"): voltear()+ console.log("cagada")
}
function adiosListen (){
  primera.removeEventListener('click',giramos);
  segunda.removeEventListener('click',giramos);
}
function voltear(){
setTimeout(()=>{
primera.classList.remove("mola");
segunda.classList.remove("mola");}
,1000)

}
// VARIABLES
let volteada= false;
let segunda;
let primera;
document.getElementsByClassName("card").id


// BINDS Y EVENTOS
var cartas=document.querySelectorAll(".card");
cartas.forEach(carta => carta.addEventListener('click',giramos));








//  FUNCIONES




// VARIABLES




// BINDS Y EVENTOS
var card1 = document.querySelector('#card1');
card1.addEventListener( 'click', function() {
  card1.classList.toggle('is-flipped');
});
var card2 = document.querySelector('#card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});
var card3 = document.querySelector('#card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});
var card4 = document.querySelector('#card4');
card4.addEventListener( 'click', function() {
  card4.classList.toggle('is-flipped');
});
var card5 = document.querySelector('#card5');
card5.addEventListener( 'click', function() {
  card5.classList.toggle('is-flipped');
});
var card6 = document.querySelector('#card6');
card6.addEventListener( 'click', function() {
  card6.classList.toggle('is-flipped');
});
