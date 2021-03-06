import { gql } from '@apollo/client';
import { client } from 'apollo-client';
import { getEvolutionChainByIdQuery } from 'gql/queries';
import { EvolutionChain } from 'pokedex-promise-v2';
import mapEvolutions from '../helpers/mapEvolutions';

export const getEvolutions = async ({ evolutionChainId }: { evolutionChainId: number }) => {
  try {
    const { data } = await client.query({
      query: gql(getEvolutionChainByIdQuery),
      variables: {
        evolutionChainId,
      },
    });

    const evolutionChainData = data.evolutionchain_by_pk.species as EvolutionChain;

    const evolutions = mapEvolutions(evolutionChainData);

    return evolutions;
  } catch (err) {
    console.error(`Error getting evolution chain data for evolutionChainId: ${evolutionChainId}...`);

    return null;
  }
};
