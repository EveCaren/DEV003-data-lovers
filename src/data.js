// estas funciones son de ejemplo


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


export const anotherExample = () => {
  return 'OMG';
};
