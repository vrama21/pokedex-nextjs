import { gql } from '@apollo/client';
import { client } from 'apollo-client';
import { getMachinesByVersionGroupIdQuery } from 'gql/queries';
import { Machine } from 'pokedex-promise-v2';

const getMachinesByVersionGroupId = async ({ versionGroupId }: { versionGroupId: number }) => {
  try {
    const { data } = await client.query({
      query: gql(getMachinesByVersionGroupIdQuery),
      variables: {
        versionGroupId,
      },
    });

    const machines = data.versiongroup_by_pk.pokemon_v2_machines;

    return machines as Machine[];
  } catch (error) {
    throw new Error(`Error getting machines data for versionGroupId: ${versionGroupId}...`);
  }
};

export default getMachinesByVersionGroupId;
