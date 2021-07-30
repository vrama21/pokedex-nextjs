import Pokedex from 'pokedex-promise-v2';
import getEvolutionsList from './getEvolutions';
import getMoves from './getMoves';

const getPokemon = async (pokemonName) => {
  const pokedex = new Pokedex();

  const pokemonResponse = await pokedex.getPokemonByName(pokemonName);
  const speciesResponse = await pokedex.getPokemonSpeciesByName(pokemonName);
  const evolutionsResponse = await pokedex.resource(speciesResponse.evolution_chain.url);

  // console.log({ pokemonResponse })
  // console.log({ speciesResponse })
  // console.log({ evolutionsResponse });

  const evolutions = await getEvolutionsList(evolutionsResponse.chain, pokedex);
  const moves = await getMoves(pokemonResponse.moves);

  const data = {
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonResponse.id}.png`,
    stats: {
      hp: pokemonResponse.stats[0].base_stat,
      attack: pokemonResponse.stats[1].base_stat,
      defense: pokemonResponse.stats[2].base_stat,
      specialAttack: pokemonResponse.stats[3].base_stat,
      specialDefense: pokemonResponse.stats[4].base_stat,
      speed: pokemonResponse.stats[5].base_stat,
    },
    types: pokemonResponse.types.map((type) => type.type.name),
    height: pokemonResponse.height,
    weight: pokemonResponse.weight,
    evolutions,
    evolutionChain: evolutionsResponse.chain,
    moves,
  };

  console.log(data);

  return data;
};

export default getPokemon;
