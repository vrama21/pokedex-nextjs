const getMoves = (movesResponse) => {
  const moves = movesResponse
    .map((move) => {
      return {
        id: move.id,
        accuracy: move.pokemon_v2_move.accuracy,
        category: move.pokemon_v2_move.pokemon_v2_movedamageclass.name,
        level: move.level,
        method: move.pokemon_v2_movelearnmethod.name,
        name: move.pokemon_v2_move.name,
        power: move.pokemon_v2_move.power,
        pp: move.pokemon_v2_move.pp,
        type: move.pokemon_v2_move.pokemon_v2_type.name,
      };
    })
    .sort((moveA, moveB) => moveA.level - moveB.level);

  return moves;
};

export default getMoves;
