import { gql } from '@apollo/client';
import client from 'apollo-client';
import { getPokemonSpeciesById } from 'gql/queries';

const getPokemonSpeciesGraphql = async ({ speciesId }) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonSpeciesById),
      variables: {
        speciesId,
      },
    });

    const speciesData = data.pokemon_v2_pokemonspecies_by_pk;

    return speciesData;
  } catch (err) {
    console.error(`Error getting species data for speciesId: ${speciesId}...`);

    return null;
  }
};

export default getPokemonSpeciesGraphql;
