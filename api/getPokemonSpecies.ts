import { gql } from '@apollo/client';
import { getPokemonSpeciesById } from 'gql/queries';
import { PokemonSpecies } from 'pokedex-promise-v2';
import { client } from '../apollo-client';

export const getPokemonSpecies = async ({ speciesId }: { speciesId: number }) => {
  try {
    const { data } = await client.query({
      query: gql(getPokemonSpeciesById),
      variables: {
        speciesId,
      },
    });

    const species = data.pokemon_v2_pokemonspecies_by_pk as PokemonSpecies;

    return species;
  } catch (err) {
    throw new Error(`Error getting species data for speciesId: ${speciesId}...`);
  }
};
