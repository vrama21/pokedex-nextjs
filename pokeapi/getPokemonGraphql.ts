import { getPokemonByName } from 'gql/queries';
import { gql } from '@apollo/client';
import { client } from '../apollo-client';

export const getPokemonGraphql = async (pokemon: string) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonByName),
      variables: {
        pokemonName: pokemon.toLowerCase(),
        versionGroupId: 18,
      },
    });

    return data.pokemon_v2_pokemon[0];
  } catch (err) {
    console.error(`Error getting pokemon data for ${pokemon}...`);

    return null;
  }
};
