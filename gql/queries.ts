export const getEvolutionChainByIdQuery = /* GraphQL */ `
  query GetEvolutionChainById($evolutionChainId: Int!) {
    evolutionchain_by_pk: pokemon_v2_evolutionchain_by_pk(id: $evolutionChainId) {
      id
      species: pokemon_v2_pokemonspecies(order_by: { id: asc }) {
        id
        evolves_from_species_id
        name
        evolutions: pokemon_v2_pokemonevolutions {
          min_affection
          min_beauty
          min_happiness
          min_level
          time_of_day
          trade_species_id
          evolution_trigger: pokemon_v2_evolutiontrigger {
            name
          }
          item: pokemon_v2_item {
            name
          }
          itemByHeldItemId: pokemonV2ItemByHeldItemId {
            name
          }
          move: pokemon_v2_move {
            name
          }
        }
      }
    }
  }
`;

export const getMachinesByVersionGroupIdQuery = /* GraphQL */ `
  query GetMachinesByVersionGroupId($versionGroupId: Int!) {
    versiongroup_by_pk: pokemon_v2_versiongroup_by_pk(id: $versionGroupId) {
      machines: pokemon_v2_machines {
        move: pokemon_v2_move {
          name
        }
        item: pokemon_v2_item {
          name
        }
      }
    }
  }
`;

export const getMove = /* GraphQL */ `
  query GetMove($moveName: String!) {
    move: pokemon_v2_move(where: { name: { _eq: $moveName } }) {
      name
      accuracy
      power
      pp
    }
  }
`;

export const getPokemonByName = /* GraphQL */ `
  query GetPokemonByName($pokemonName: String!, $versionGroupId: Int) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $pokemonName } }) {
      id
      height
      name
      weight
      pokemon_species_id
      moves: pokemon_v2_pokemonmoves(where: { version_group_id: { _eq: $versionGroupId } }) {
        id
        version_group_id
        level
        move: pokemon_v2_move {
          accuracy
          power
          pp
          name
          damageclass: pokemon_v2_movedamageclass {
            name
          }
          type: pokemon_v2_type {
            name
          }
        }
        learnmethod: pokemon_v2_movelearnmethod {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const getPokemonSpeciesById = /* GraphQL */ `
  query GetPokemonSpeciesById($speciesId: Int!) {
    pokemonspecies_by_pk: pokemon_v2_pokemonspecies_by_pk(id: $speciesId) {
      name
      evolution_chain_id
    }
  }
`;

export const listAllMoves = /* GraphQL */ `
  query ListAllMoves {
    move: pokemon_v2_move {
      name
    }
  }
`;

export const listAllPokemon = /* GraphQL */ `
  query ListAllPokemon {
    pokemon: pokemon_v2_pokemon {
      name
    }
  }
`;
