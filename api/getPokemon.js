const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const getPokemon = async (pokemon) => {
  const response = await P.getPokemonByName(pokemon.toLowerCase());

  return response;
};

export { getPokemon };
