import { gql } from '@apollo/client';
import client from 'apollo-client';
import { getPokemonByName } from 'graphql/queries';

const getPokemonGraphql = async ({ pokemon, versionGroupId }) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonByName),
      variables: {
        pokemonName: pokemon,
        versionGroupId,
      },
    });

    const pokemonData = data.pokemon_v2_pokemon[0];

    return pokemonData;
  } catch (err) {
    console.error(`Error getting pokemon data for ${pokemon}...`);

    return null;
  }
};

export default getPokemonGraphql;
