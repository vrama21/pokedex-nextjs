const getEvolutionChainByIdQuery = /* GraphQL */ `
  query GetEvolutionChainById($evolutionChainId: Int!) {
    pokemon_v2_evolutionchain_by_pk(id: $evolutionChainId) {
      id
      pokemon_v2_pokemonspecies(order_by: { id: asc }) {
        id
        evolves_from_species_id
        name
      }
    }
  }
`;

const getMachinesByVersionGroupIdQuery = /* GraphQL */ `
  query GetMachinesByVersionGroupId($versionGroupId: Int!) {
    pokemon_v2_versiongroup_by_pk(id: $versionGroupId) {
      pokemon_v2_machines {
        pokemon_v2_move {
          name
        }
        pokemon_v2_item {
          name
        }
      }
    }
  }
`;

const getMove = /* GraphQL */ `
  query GetMove($moveName: String!) {
    pokemon_v2_move(where: { name: { _eq: $moveName } }) {
      name
      accuracy
      power
      pp
    }
  }
`;

const getPokemonByName = /* GraphQL */ `
  query GetPokemonByName($pokemonName: String!, $versionGroupId: Int) {
    pokemon_v2_pokemon(where: { name: { _eq: $pokemonName } }) {
      id
      height
      name
      weight
      pokemon_species_id
      pokemon_v2_pokemonmoves(where: { version_group_id: { _eq: $versionGroupId } }) {
        id
        version_group_id
        level
        pokemon_v2_move {
          accuracy
          power
          pp
          name
          pokemon_v2_movedamageclass {
            name
          }
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_movelearnmethod {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

const getPokemonSpeciesById = /* GraphQL */ `
  query GetPokemonSpeciesById($speciesId: Int!) {
    pokemon_v2_pokemonspecies_by_pk(id: $speciesId) {
      name
      evolution_chain_id
    }
  }
`;

const listAllMoves = /* GraphQL */ `
  query ListAllMoves {
    pokemon_v2_move {
      name
    }
  }
`;

const listAllPokemon = /* GraphQL */ `
  query ListAllPokemon {
    pokemon_v2_pokemon {
      name
    }
  }
`;

export {
  getEvolutionChainByIdQuery,
  getMachinesByVersionGroupIdQuery,
  getMove,
  getPokemonByName,
  getPokemonSpeciesById,
  listAllMoves,
  listAllPokemon,
};
