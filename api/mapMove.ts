export const mapMove = (pokemonMove: any) => {
  return {
    id: pokemonMove.id,
    accuracy: pokemonMove.pokemon_v2_move.accuracy,
    category: pokemonMove.pokemon_v2_move.pokemon_v2_movedamageclass.name,
    level: pokemonMove.level,
    method: pokemonMove.pokemon_v2_movelearnmethod.name,
    name: pokemonMove.pokemon_v2_move.name,
    power: pokemonMove.pokemon_v2_move.power,
    pp: pokemonMove.pokemon_v2_move.pp,
    type: pokemonMove.pokemon_v2_move.pokemon_v2_type.name,
  };
};
