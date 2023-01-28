import { namePokemon, idPokemon, abcOrder } from '../src/data.js';
const data=[
  {
    "name": "bulbasaur",
    "num": "001",
  },
  {
    "name": "pikachu",
    "num": "025"
  },
  {
    "name": "ivysaur",
    "num": "002"
  }
]

describe('namePokemon', () => {
  it('is a function', () => {
    expect(typeof namePokemon).toBe('function');
  });
  it('devolver toda la información del pokemon', () =>{
    expect(namePokemon(data,"ivysaur")).toEqual([{
      "name": "ivysaur",
      "num": "002"
    }])
  })
});

describe('idPokemon', () => {
  it('is a function', () => {
    expect(typeof idPokemon).toBe('function');
  });
  it('devolver pokemon por id', () =>{
    expect(idPokemon(data,"025")).toEqual([{
      "name": "pikachu",
      "num": "025"
    }])
  })
});

describe('abcOrder', () => {
  it('is a function', () => {
    expect(typeof abcOrder).toBe('function');
  });
  it('devolver pokemones ordenados alfabeticamente', () =>{
    expect(abcOrder(data,'A-Z')).toEqual([
      {
        "name": "bulbasaur",
        "num": "001",
      },
      {
        "name": "ivysaur",
        "num": "002"
      },
      {
        "name": "pikachu",
        "num": "025"
      }])
  })
});
