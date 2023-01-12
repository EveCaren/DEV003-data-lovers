//aquí voy a  contruir las funciones para manipular mis datos.
//primero hay que hacer una función que me filtre mis datos por nombre
export function namePokemon (data, name) {
  const namePoke= name;
  for (let i = 0; i< data.length; i++){
    if(data[i].name === namePoke){
      return(data[i]);
    }
  }
}
//filtrar por habilidad 
// export function (){
//   const = ;
//   for (let i=0; i < .length; i++)
//     if(data[i]. === ){
//       return(data[i]);
// }
// };

//Filtro por debilidad 




