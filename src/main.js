import {namePokemon, idPokemon, abcOrder} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
const pokemones = data.pokemon; //creamos un variable que iba a contener los datos para poder acceder a ellos.
//función que muestra las cards
function drawCards(pokemon){
  const $container = document.querySelector(".section3"),
    $template = document.getElementById("template__card").content,
    $fragment = document.createDocumentFragment();
  $template.querySelector("img").setAttribute("src",pokemon.img);
  $template.querySelector("img").setAttribute("alt",pokemon.num);
  $template.querySelector("p").textContent =`No. ${pokemon.num}`;
  $template.querySelector("figcaption").textContent =pokemon.name;
  $template.querySelector(".feature").dataset.id = pokemon.num;

  let $clone = document.importNode($template,true);
  $fragment.appendChild($clone);
  $container.appendChild($fragment);
  const feature = document.querySelector(".feature");
  console.log(feature);
  // for( let i=0; i<feature.length; i++){
  //   i.addEventListener("click",e =>{console.log(e.target)});
  // }
  
  // feature.forEach((el)=> el.addEventListener("click",e =>{console.log(e.target)}));
}
pokemones.forEach(pokemon=>{drawCards(pokemon)})

//evento de los botones características

const botones = document.querySelectorAll(".feature");
botones.forEach((el)=> el.addEventListener("click", e=>{
  const idBoton = e.target.getAttribute("data-id");
  console.log(idBoton);
  const numFiltrado = idPokemon(pokemones, idBoton);
  console.log(numFiltrado);
  const $container = document.querySelector(".section3"),
    $template = document.getElementById("card__pokemon").content,
    $fragment = document.createDocumentFragment();
  $container.innerHTML = "";
  numFiltrado.forEach(el =>{
    $template.querySelector("h1").textContent =el.name;
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.num);
    $template.querySelector("p").textContent =`No. ${el.num}`;
    $template.querySelector(".group2").textContent =`
        Height:${el.size.height} 
        Weight: ${el.size.weight}
        Pokemon Rarity: ${el["pokemon-rarity"]}`;
    $template.querySelector(".group3").textContent =`
        About:${el.about}`;
    $template.querySelector(".group4").textContent =`
        Type: ${el.type}
        Resistant:${el.resistant} 
        Weaknesses: ${el.weaknesses}
        Type ${el.type}`;
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
  });
  $container.appendChild($fragment);
}))

// este es el evento que busca un pokemon por nombre 
const botonSearch = document.getElementById("search");
botonSearch.addEventListener("click", botonName); 
function botonName(event){
  event.preventDefault();

  const inputName = document.getElementById("name").value;
  const pokemon = namePokemon(pokemones, inputName);//aquí probamos la función
  console.log(pokemon);
  // const $container = document.querySelector(".section3"),
  // $template = document.getElementById("template__card").content,
  // $template2 = document.getElementById("noFound").content,
  // $fragment = document.createDocumentFragment();
  // $container.innerHTML = "";
  if (pokemon.length === 0){
    const $container = document.querySelector(".section3"),
    $template = document.getElementById("template__card").content,
    $template2 = document.getElementById("noFound").content,
    $fragment = document.createDocumentFragment();
  $container.innerHTML = "";
    $template2.querySelector("img").setAttribute("src","./img/pikachu.png");
    $template2.querySelector("img").setAttribute("alt","pikachu");
    $template2.querySelector("figcaption").textContent ="Lo sentimos, no hay pokemones con esas características.";
    let $clone = document.importNode($template2,true);
    $container.appendChild($clone);

  }else{
    pokemon.forEach(pokemon =>{
      const $container = document.querySelector(".section3");
      $container.innerHTML = "";
      drawCards(pokemon);
    //   $template.querySelector("img").setAttribute("src",el.img);
    //   $template.querySelector("img").setAttribute("alt",el.num);
    //   $template.querySelector("p").textContent =`No. ${el.num}`;
    //   $template.querySelector("figcaption").textContent =el.name;
    //   $template.querySelector(".feature").dataset.id = el.num;
    //   let $clone = document.importNode($template,true);
    //   $fragment.appendChild($clone);
    // });
    })
  // $container.appendChild($fragment);
}}

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