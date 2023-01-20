//aquí voy a  contruir las funciones para manipular mis datos.
//primero hay que hacer una función que me filtre mis datos por nombre
export function namePokemon (data, name) {
  const filtroName = [];
  const namePoke= name;
  for (let i = 0; i< data.length; i++){
    if(data[i].name === namePoke){
      filtroName.push(data[i]);
      
    }
  }
  return filtroName
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


// filtro por orden alfabético
export function abcOrder (data, order){
  const orderArray= data.slice().sort((a,b) => {
    const nameA= a.name.toLowerCase();
    const nameB= b.name.toLowerCase();
    if (nameA<nameB){
      return-1;
    }
    if (nameA>nameB){
      return 1;
    }
    return 0;
  }) 
  if(order==='A-Z'){
    return orderArray;
  }else{
    const inverso=orderArray.reverse();
    return inverso;
  }
}
