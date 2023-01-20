import {namePokemon, abcOrder} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
const pokemones = data.pokemon; //creamos un variable que iba a contener los datos para poder acceder a ellos.
//orden por número 

const $cards = document.querySelector(".section3"),
  $template = document.getElementById("template__card").content,
  $fragment = document.createDocumentFragment();
$cards.addEventListener("click,", e => {
  console.log(e)
});
pokemones.forEach(el =>{
  $template.querySelector("img").setAttribute("src",el.img);
  $template.querySelector("img").setAttribute("alt",el.num);
  $template.querySelector("p").textContent =`No. ${el.num}`;
  $template.querySelector("figcaption").textContent =el.name;
  $template.querySelector(".feature").dataset.id = el.num;
  let $clone = document.importNode($template,true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment);


// este es el evento que busca un pokemon por nombre 
const botonSearch = document.getElementById("search");
botonSearch.addEventListener("click", botonName); 
function botonName(event){
  event.preventDefault();

  const inputName = document.getElementById("name").value;
  const nombreFiltrado = namePokemon(pokemones, inputName);//aquí probamos la función
  console.log(nombreFiltrado);
  const $cards = document.querySelector(".section3"),
    $template = document.getElementById("template__card").content,
    $template2 = document.getElementById("noFound").content,
    $fragment = document.createDocumentFragment();
  $cards.innerHTML = "";
  if (nombreFiltrado.length === 0){
    $template2.querySelector("img").setAttribute("src","./img/pikachu.png");
    $template2.querySelector("img").setAttribute("alt","pikachu");
    $template2.querySelector("figcaption").textContent ="Lo sentimos, no hay pokemones con esas características.";
    let $clone = document.importNode($template2,true);
    $fragment.appendChild($clone);

  }else{
    nombreFiltrado.forEach(el =>{
      $template.querySelector("img").setAttribute("src",el.img);
      $template.querySelector("img").setAttribute("alt",el.num);
      $template.querySelector("p").textContent =`No. ${el.num}`;
      $template.querySelector("figcaption").textContent =el.name;
      let $clone = document.importNode($template,true);
      $fragment.appendChild($clone);
    });
  }
  $cards.appendChild($fragment);
}

//filtro del Orden alfabético

// const ordenar= document.getElementById("orderSelect");
// const selected= ordenar.options[ordenar.selectedIndex].text;  
// const ordenpokemones = abcOrder(pokemones,selected);
// const $cards = document.querySelector(".section3"),
//   $template = document.getElementById("template__card").content,
//   $fragment = document.createDocumentFragment();

// ordenpokemones.forEach(el =>{
//   $template.querySelector("img").setAttribute("src",el.img);
//   $template.querySelector("img").setAttribute("alt",el.num);
//   $template.querySelector("p").textContent =`No. ${el.num}`;
//   $template.querySelector("figcaption").textContent =el.name;
//   let $clone = document.importNode($template,true);
//   $fragment.appendChild($clone);
// });
// $cards.appendChild($fragment);

// Card características
// const buttonPag2 = document.querySelector(".feature");
// buttonPag2.addEventListener("click",characteristics);
// function characteristics(e){
//   if (e.target.ClassList.contains("feature")){
//     console.log("hicisteclick");
    // const $cards = document.querySelector(".section3"),
    //   $template = document.getElementById("card__pokemon").content,
    //   $fragment = document.createDocumentFragment();
    // $cards.innerHTML = "";
    // pokemones.forEach(el =>{
    //   $template.querySelector("h1").textContent =el.name;
    //   $template.querySelector("img").setAttribute("src",el.img);
    //   $template.querySelector("img").setAttribute("alt",el.num);
    //   $template.querySelector("p").textContent =`No. ${el.num}`;
    //   let $clone = document.importNode($template,true);
    //   $fragment.appendChild($clone);
    // });
    // $cards.appendChild($fragment);
//   }
//   e.stopPropagation();
// }