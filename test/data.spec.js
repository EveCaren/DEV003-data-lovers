import { namePokemon, weakPokemon, typePokemon, resisPokemon, idPokemon, abcOrder } from '../src/data.js';

const data = [
  {
    "name": "bulbasaur",
    "num": "001",
    "type": [
      "grass",
      "poison"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ]
  },
  {
    "name": "pikachu",
    "num": "025",
    "type": [
      "electric"
    ],
    "resistant": [
      "electric",
      "flying",
      "steel"
    ],
    "weaknesses": [
      "ground"
    ]
  },
  {
    "name": "ivysaur",
    "num": "002",
    "type": [
      "grass",
      "poison"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ]
  }
]
// test de la función buscar por nombre
describe('namePokemon', () => {
  it('is a function', () => {
    expect(typeof namePokemon).toBe('function');
  });
  it('devolver toda la información del pokemon', () => {
    expect(namePokemon(data, "ivysaur")).toEqual([{
      "name": "ivysaur",
      "num": "002",
      "type": [
        "grass",
        "poison"
      ],
      "resistant": [
        "water",
        "electric",
        "grass",
        "fighting",
        "fairy"
      ],
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }])
  })
});

describe('idPokemon', () => {
  it('is a function', () => {
    expect(typeof idPokemon).toBe('function');
  });
  it('devolver pokemon por id', () => {
    expect(idPokemon(data, "025")).toEqual([{
      "name": "pikachu",
      "num": "025",
      "type": [
        "electric"
      ],
      "resistant": [
        "electric",
        "flying",
        "steel"
      ],
      "weaknesses": [
        "ground"
      ]
    }])
  })
});

// test filtro ordenar alfabéticamente
describe('abcOrder', () => {
  it('is a function', () => {
    expect(typeof abcOrder).toBe('function');
  });
  it('devolver pokemones ordenados alfabeticamente', () => {
    expect(abcOrder(data, 'A-Z')).toEqual([
      {
        "name": "bulbasaur",
        "num": "001",
        "type": [
          "grass",
          "poison"
        ],
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      },
      {
        "name": "ivysaur",
        "num": "002",
        "type": [
          "grass",
          "poison"
        ],
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      },
      {
        "name": "pikachu",
        "num": "025",
        "type": [
          "electric"
        ],
        "resistant": [
          "electric",
          "flying",
          "steel"
        ],
        "weaknesses": [
          "ground"
        ]
      }])
  })
});
// test filtro debilidades
describe('weakPokemon', () => {
  it('is a function', () => {
    expect(typeof weakPokemon).toBe('function');
  });
  it('devolver pokemones filtrados por debilidad', () => {
    expect(weakPokemon(data, 'ground')).toEqual([
      {
        "name": "pikachu",
        "num": "025",
        "type": [
          "electric"
        ],
        "resistant": [
          "electric",
          "flying",
          "steel"
        ],
        "weaknesses": [
          "ground"
        ]
      }])
  })
});

// test filtro tipo
describe('typePokemon', () => {
  it('is a function', () => {
    expect(typeof typePokemon).toBe('function');
  });
  it('devolver pokemones filtrados por tipo', () => {
    expect(typePokemon(data, 'electric')).toEqual([
      {
        "name": "pikachu",
        "num": "025",
        "type": [
          "electric"
        ],
        "resistant": [
          "electric",
          "flying",
          "steel"
        ],
        "weaknesses": [
          "ground"
        ]
      }])
  })
});

// test filtro resistencia
describe('resisPokemon', () => {
  it('is a function', () => {
    expect(typeof resisPokemon).toBe('function');
  });
  it('devolver pokemones filtrados por resistencia', () => {
    expect(resisPokemon(data, 'fighting')).toEqual([
      {
        "name": "bulbasaur",
        "num": "001",
        "type": [
          "grass",
          "poison"
        ],
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      },
      {
        "name": "ivysaur",
        "num": "002",
        "type": [
          "grass",
          "poison"
        ],
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      }])
  })
});