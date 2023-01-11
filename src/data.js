// estas funciones son de ejemplo
//aquí voy a  contruir las funciones para manipular mis datos.
//primero hay que hacer una función que me filtre mis datos
//quiero filtrar datos por nombre. Primero utilizaré el método filter


export function namePokemon (data, name) {
  const namePoke= name;
  for (let i = 0; i< data.length; i++){
    console.log(data[i].name)
    if(data[i].name === namePoke){
      let nombre = namePoke;
      return nombre;
    }else{
      return "incorrecto"
    }
  }
}

/*export function name (data, nameP){
  data.filter ( pokemon => pokemon.name === nameP);
}*/

//quiero filtrar datos por habilidad y debilidad 


<<<<<<< HEAD
=======

export function namePokemon (data, name) {
  const namePoke = name;
  const nombreActualizado = [];
  for (let i = 0; i < data.length; i++){
    /*console.log(data[i].name)*/
    if(data[i].name === namePoke){
      nombreActualizado.push(data[i]);
      console.log(nombreActualizado);
    }else {
      return "incorrecto"
    }
  }
}

>>>>>>> c08340b193573a56a84c26d28f1aa202d417ab6b

export const anotherExample = () => {
  return 'OMG';
};
