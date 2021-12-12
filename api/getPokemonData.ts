import { PokemonMove, PokemonResponse } from 'types';
import { getMachines } from './getMachines';
import { getPokemon } from './getPokemon';
import { getPokemonSpecies } from './getPokemonSpecies';
import { getEvolutions } from './getEvolutions';
import { mapMove } from './mapMove';
import { mapType } from './mapType';

export const getPokemonData = async (pokemonName: string) => {
  const pokemonResponse = await getPokemon(pokemonName, 18);
  const species = await getPokemonSpecies({ speciesId: pokemonResponse.pokemon_species_id });

  const machines = await getMachines({ versionGroupId: 18 });
  const moves: PokemonMove[] = pokemonResponse.pokemon_v2_pokemonmoves.map(mapMove);
  const evolutions = await getEvolutions({ evolutionChainId: species.evolution_chain_id });

  const pokemonData = {
    evolutions,
    height: pokemonResponse.height,
    id: pokemonResponse.id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonResponse.id}.png`,
    machines,
    moves,
    name: pokemonResponse.name,
    speciesId: pokemonResponse.pokemon_species_id,
    stats: {
      hp: pokemonResponse.pokemon_v2_pokemonstats[0].base_stat,
      attack: pokemonResponse.pokemon_v2_pokemonstats[1].base_stat,
      defense: pokemonResponse.pokemon_v2_pokemonstats[2].base_stat,
      specialAttack: pokemonResponse.pokemon_v2_pokemonstats[3].base_stat,
      specialDefense: pokemonResponse.pokemon_v2_pokemonstats[4].base_stat,
      speed: pokemonResponse.pokemon_v2_pokemonstats[5].base_stat,
    },
    types: pokemonResponse.pokemon_v2_pokemontypes.map(mapType),
    weight: pokemonResponse.weight,
  };

  return pokemonData as PokemonResponse;
};
