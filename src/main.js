import {namePokemon} from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemones = data.pokemon; //creamos un variable que iba a contener los datos para poder acceder a ellos. 
const botonSearch = document.getElementById("search");
botonSearch.addEventListener("click", botonName); 
function botonName(event){
  event.preventDefault();
  const inputName = document.getElementById("name").value;
  const nombreFiltrado = namePokemon(pokemones, inputName);//aquí probamos la función
  console.log(nombreFiltrado);


  const card = `
  <div class ="card">
    <h3>${nombreFiltrado.name}</h3>
  </div>
  `;
  document.body.innerHTML = card;
}

/*for (let i = 0; i< pokemones.length; i++){
    console.log(pokemones[i])
}este es una prueba*/





