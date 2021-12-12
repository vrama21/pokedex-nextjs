import { getPokemonByName } from 'gql/queries';
import { gql } from '@apollo/client';
import { client } from 'apollo-client';
import { Pokemon } from 'pokedex-promise-v2';

export const getPokemon = async (pokemon: string, versionGroupId: number) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonByName),
      variables: {
        pokemonName: pokemon.toLowerCase(),
        versionGroupId,
      },
    });

    const pokemonResponse = data.pokemon_v2_pokemon[0] as Pokemon;

    return pokemonResponse;
  } catch (err) {
    throw new Error(`Error getting pokemon data for pokemon: ${pokemon}...`);
  }
};
