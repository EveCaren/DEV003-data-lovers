import { namePokemon, idPokemon, abcOrder, weakPokemon } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
const pokemones = data.pokemon; //creamos un variable que iba a contener los datos para poder acceder a ellos.

//Función que dibuja las cards
function drawCards(pokemon) {
  const $container = document.querySelector(".section3"),
    $template = document.getElementById("template__card").content,
    $fragment = document.createDocumentFragment();
  $template.querySelector("img").setAttribute("src", pokemon.img);
  $template.querySelector("img").setAttribute("alt", pokemon.num);
  $template.querySelector("p").textContent = `No. ${pokemon.num}`;
  $template.querySelector("figcaption").textContent = pokemon.name;
  $template.querySelector(".feature").dataset.id = pokemon.num;
  const $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
  $container.appendChild($fragment);
}
//Función que realiza el evento de los botones "feature" de cada card, debe llamarse cada que se ejecute drawcards
function eventFeature() {
  const feature = document.querySelectorAll(".feature");
  //console.log(eventFeature);
  for (let i = 0; i < feature.length; i++) {
    feature[i].addEventListener("click", e => {
      //console.log(e.target);
      const idBoton = e.target.getAttribute("data-id");
      //console.log(idBoton);
      const pokemon = idPokemon(pokemones, idBoton)
      drawFeature(pokemon)
    });
  }
}

//función que nos regresa a las cards principales
function newSearch(){
  const buttonNewSearch = document.getElementById("newSearch");
  buttonNewSearch.addEventListener("click", () =>{
    //console.log(buttonNewSearch);
    const $container = document.querySelector(".section3");
    $container.innerHTML = "";
    pokemones.forEach(pokemon => { drawCards(pokemon) });
    eventFeature();
  })
}
//función que pinta las características específicas de cada pokemon
function drawFeature(pokemon) {
  const $container = document.querySelector(".section3"),
    $template = document.getElementById("card__pokemon").content,
    $fragment = document.createDocumentFragment();
  $container.innerHTML = "";
  pokemon.forEach(el => {
    $template.querySelector("h1").textContent = el.name;
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.num);
    $template.querySelector("p").textContent = `No. ${el.num}`;
    $template.querySelector(".group2").textContent = `
         Height: ${el.size.height} 
        Height: ${el.size.height} 
         Height: ${el.size.height} 
         Weight: ${el.size.weight}
         Pokemon Rarity: ${el["pokemon-rarity"]}`;
    $template.querySelector(".group3").textContent = `
         About: ${el.about}`;
    $template.querySelector(".group4").textContent = `
         Type: ${el.type}
         Resistant: ${el.resistant} 
         Resistant: ${el.resistant} 
         Resistant: ${el.resistant} 
         Weaknesses: ${el.weaknesses}
         Type: ${el.type}`;
    const $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $container.appendChild($fragment);
  newSearch()
}

// Función que se ejecuta cuando no encuentra ningún pokemon
function noFound(){
  const $container = document.querySelector(".section3"),
    $template2 = document.getElementById("noFound").content,
    $fragment = document.createDocumentFragment();
  $container.innerHTML = "";
  $template2.querySelector("img").setAttribute("src", "./img/pikachu.png");
  $template2.querySelector("img").setAttribute("alt", "pikachu");
  $template2.querySelector("figcaption").textContent = "Lo sentimos, no hay pokemones con esas características.";
  const $clone = document.importNode($template2, true);
  $fragment.appendChild($clone);
  $container.appendChild($fragment);
}

//Con este se ejecutan las cards del inicio
pokemones.forEach(pokemon => { drawCards(pokemon) });
eventFeature();


// este es el evento del filtro nombre 
const botonSearch = document.getElementById("search");
botonSearch.addEventListener("click", weakOrder);

function botonName(event) {
  event.preventDefault();
  const inputName = document.getElementById("name").value;
  const pokemon = namePokemon(pokemones, inputName);//aquí probamos la función de data.js
  if (pokemon.length === 0) {
    noFound();
  } else {
    pokemon.forEach(pokemon => {
      const $container = document.querySelector(".section3");
      $container.innerHTML = "";
      drawCards(pokemon);
    })
    eventFeature();
  }
}

//filtro del Orden alfabético
const ordenar = document.getElementById("orderSelect");
const buttonOrder = document.getElementById("button__order");
//console.log(buttonOrder);//este sirve para comprobar que estamos jalando bien el boton
buttonOrder.addEventListener("click",orderABC); 
function orderABC(){
  const selected= ordenar.options[ordenar.selectedIndex].text;
  //console.log(selected);//este sirve para ver si estamos jalando bien la opción
  const ordenpokemones = abcOrder(pokemones,selected);//esta es la función que hicimos en data.js
  //console.log(ordenpokemones);//este sirve para ver si ordena bien
  const $container = document.querySelector(".section3");//con este borramos los pokemones del inicio
  $container.innerHTML = "";//con este borramos los pokemones del inicio
  ordenpokemones.forEach(pokemon => { 
    drawCards(pokemon) });
  eventFeature();
}

const weakSelect = document.getElementById("weakSelect")

function weakOrder () {
  const inputWeak = weakSelect.options[weakSelect.selectedIndex].text;
  console.log(inputWeak);
  const pruebaaa = weakPokemon(pokemones,inputWeak);
  console.log(pruebaaa);
}


