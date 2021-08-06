const getMove = /* GraphQL */ `
  query GetMove($moveName: String) {
    pokemon_v2_move(where: { name: { _eq: $moveName } }) {
      name
      accuracy
      power
      pp
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

export { getMove, listAllMoves, listAllPokemon };
