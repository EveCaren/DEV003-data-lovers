//aquí voy a  contruir las funciones para manipular mis datos.
//primero hay que hacer una función que me filtre mis datos por nombre
export function namePokemon(data, name) {
  const filtroName = [];
  const namePoke = name;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === namePoke) {
      filtroName.push(data[i]);

    }
  }
  return filtroName
}
//Filtro por número
export function idPokemon(data, num) {
  const filtroNum = [];
  const numPoke = num;
  for (let i = 0; i < data.length; i++) {
    if (data[i].num === numPoke) {
      filtroNum.push(data[i]);
    }
  }
  return filtroNum
}
//filtrar por tipo 
export function typePokemon(data, typ) {
  const filtroType = [];
  const typePoke = typ;
  for (let i = 0; i < data.length; i++) {
    const typeData = data[i].type;
    for (let j = 0; j < typeData.length; j++) {
      if (typeData[j] === typePoke) {
        filtroType.push(data[i]);
      }
    }
  }
  return filtroType;
}
//filtrar por resistencia
export function resisPokemon(data, resist){ 
  const filtroResis = [];
  const resisPoke = resist;
  for(let i = 0; i < data.length; i++){
    const resisData = data[i].resistant;
    for (let j = 0; j < resisData.length; j++) {
      if (resisData[j] === resisPoke) {
        filtroResis.push(data[i]);
      }
    }
  }
  return filtroResis;
}
//filtrar por debilidad 
export function weakPokemon(data, weak) {
  const filtroWeak = [];
  const weakPoke = weak;
  for (let i = 0; i < data.length; i++) {
    const weakData = data[i].weaknesses;
    for (let j = 0; j < weakData.length; j++) {
      if (weakData[j] === weakPoke) {
        filtroWeak.push(data[i]);
      }
    }
  }
  return filtroWeak;
}


// filtro por orden alfabético
export function abcOrder(data, order) {
  const orderArray = data.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  if (order === 'A-Z') {
    return orderArray;
  } else {
    const inverso = orderArray.reverse();
    return inverso;
  }
}
