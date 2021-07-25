const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const getPokemon = async (pokemon) => {
  const response = await P.getPokemonByName(pokemon.toLowerCase());

  console.log(response);

  const pokemonData = {
    id: response.id,
    name: response.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
    stats: {
      hp: response.stats[0].base_stat,
      attack: response.stats[1].base_stat,
      defense: response.stats[2].base_stat,
      specialAttack: response.stats[3].base_stat,
      specialDefense: response.stats[4].base_stat,
      speed: response.stats[5].base_stat,
    },
    types: response.types.map((type) => type.type.name),
    height: response.height,
    weight: response.weight,
    moves: response.moves,
  };

  console.log(pokemonData);

  return pokemonData;
};

export { getPokemon };
