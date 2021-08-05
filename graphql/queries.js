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
  listAllMoves,
  listAllPokemon,
}