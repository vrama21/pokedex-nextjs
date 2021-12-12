import { gql } from '@apollo/client';
import { client } from 'apollo-client';
import { getMove as getMoveQuery } from 'gql/queries';
import { Move } from 'pokedex-promise-v2';

export const getMove = async (moveName: string) => {
  try {
    const { data } = await client.query({
      query: gql(getMoveQuery),
      variables: {
        moveName,
      },
    });

    const moveResponse = data.move[0] as Move;

    return moveResponse;
  } catch (error) {
    throw new Error(`Error getting move data for move: ${moveName}`);
  }
};
