// import getMachines from './getMachines';
import { mapMove, mapType } from 'pokeapi';
import { PokemonResponse } from 'types';
import { getPokemonGraphql } from './getPokemonGraphql';
import getPokemonSpeciesGraphql from './getPokemonSpeciesGraphql';
import getEvolutions from './getEvolutions';
import mapEvolutions from './mapEvolutions';

export const getPokemon = async (pokemonName: string) => {
  const pokemonResponse = await getPokemonGraphql(pokemonName);
  console.log(pokemonResponse)
  // console.log(JSON.stringify(pokemonResponse, null, 2));
  const species = await getPokemonSpeciesGraphql({ speciesId: pokemonResponse.pokemon_species_id });
  // const machines = await getMachines({ versionGroupId: 18 });
  const evolutionChainResponse = await getEvolutions({ evolutionChainId: species.evolution_chain_id });
  const evolutions = mapEvolutions(evolutionChainResponse);
  const moves = pokemonResponse?.pokemon_v2_pokemonmoves.map(mapMove);
  const types = pokemonResponse.pokemon_v2_pokemontypes.map(mapType);

  const pokemonData = {
    id: pokemonResponse?.id,
    name: pokemonResponse?.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonResponse?.id}.png`,
    height: pokemonResponse?.height,
    weight: pokemonResponse?.weight,
    stats: {
      hp: pokemonResponse?.pokemon_v2_pokemonstats[0].base_stat,
      attack: pokemonResponse?.pokemon_v2_pokemonstats[1].base_stat,
      defense: pokemonResponse?.pokemon_v2_pokemonstats[2].base_stat,
      specialAttack: pokemonResponse?.pokemon_v2_pokemonstats[3].base_stat,
      specialDefense: pokemonResponse?.pokemon_v2_pokemonstats[4].base_stat,
      speed: pokemonResponse?.pokemon_v2_pokemonstats[5].base_stat,
    },
    types,
    // speciesId: pokemonResponse.pokemon_species_id,
    evolutions,
    moves,
    machines: [],
  };

  return pokemonData as PokemonResponse;
};
