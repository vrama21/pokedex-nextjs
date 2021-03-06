import { gql } from '@apollo/client';
import { getPokemonSpeciesById } from 'gql/queries';
import { client } from '../apollo-client';
import { PokemonSpecies } from 'types';

export const getPokemonSpecies = async ({ speciesId }: { speciesId: number }) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonSpeciesById),
      variables: {
        speciesId,
      },
    });

    const species = data.pokemonspecies_by_pk as PokemonSpecies;

    return species;
  } catch (err) {
    throw new Error(`Error getting species data for speciesId: ${speciesId}...`);
  }
};
