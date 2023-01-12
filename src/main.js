import {namePokemon} from './data.js';
import data from './data/pokemon/pokemon.js';

const botonSearch = document.getElementById("search");
const names = document.getElementById("name");


// Creamos una variable que contenga los datos de la DATA, para poder acceder a ellos
const pokemones = data.pokemon;
botonSearch.addEventListener("click", botonName);
function botonName(event){
    event.preventDefault();
    const inputName = names.value;
    console.log(inputName);
    typeof(inputName);
    const nombreFiltrado = namePokemon(pokemones,inputName);
    console.log(`Tu pokémon es ${nombreFiltrado}`);
}
/*for (let i=0; i < pokemones.length; i++){
    console.log(pokemones[i]);
}*/
