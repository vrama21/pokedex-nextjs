import { gql } from '@apollo/client';
import client from 'apollo-client';
import { getMachinesByVersionGroupIdQuery } from 'graphql/queries';

const getMachinesByVersionGroupId = async ({ versionGroupId }) => {
  try {
    const { data } = await client.query({
      query: gql(getMachinesByVersionGroupIdQuery),
      variables: {
        versionGroupId,
      },
    });

    const machineData = data.pokemon_v2_versiongroup_by_pk.pokemon_v2_machines;

    return machineData;
  } catch (err) {
    console.error(`Error getting machines data for versionGroupId: ${versionGroupId}...`);
    console.error(err.graphQLErrors[0].message);

    return null;
  }
};

export default getMachinesByVersionGroupId;
