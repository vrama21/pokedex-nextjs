import { gql } from '@apollo/client';
import client from 'apollo-client';
import { getEvolutionChainByIdQuery } from 'gql/queries';

const getEvolutions = async ({ evolutionChainId }) => {
  try {
    const { data } = await client.query({
      query: gql(getEvolutionChainByIdQuery),
      variables: {
        evolutionChainId,
      },
    });

    const evolutionChainData = data.pokemon_v2_evolutionchain_by_pk.pokemon_v2_pokemonspecies;

    return evolutionChainData;
  } catch (err) {
    console.error(`Error getting evolution chain data for evolutionChainId: ${evolutionChainId}...`);

    return null;
  }
};

export default getEvolutions;
