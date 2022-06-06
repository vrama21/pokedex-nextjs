import { PokemonResponse } from 'types';
import { getPokemon } from './getPokemon';
import { getPokemonSpecies } from './getPokemonSpecies';
import { getEvolutions } from './getEvolutions';
import { mapMove, mapType } from 'helpers';

export const getPokemonData = async (pokemonName: string) => {
  const pokemonResponse = await getPokemon(pokemonName, 18);
  const species = await getPokemonSpecies({ speciesId: pokemonResponse.pokemon_species_id });
  const moves = pokemonResponse.moves.map(mapMove);
  const evolutions = species.evolution_chain_id ? await getEvolutions({ evolutionChainId: species.evolution_chain_id }) : [];

  const pokemonData = {
    evolutions,
    height: pokemonResponse.height,
    id: pokemonResponse.id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonResponse.id}.png`,
    moves,
    name: pokemonResponse.name,
    speciesId: pokemonResponse.pokemon_species_id,
    stats: {
      hp: pokemonResponse.stats[0].base_stat,
      attack: pokemonResponse.stats[1].base_stat,
      defense: pokemonResponse.stats[2].base_stat,
      specialAttack: pokemonResponse.stats[3].base_stat,
      specialDefense: pokemonResponse.stats[4].base_stat,
      speed: pokemonResponse.stats[5].base_stat,
    },
    types: pokemonResponse.types.map(mapType),
    weight: pokemonResponse.weight,
  };

  return pokemonData as PokemonResponse;
};
