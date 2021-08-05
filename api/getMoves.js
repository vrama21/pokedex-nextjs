import Pokedex from 'pokedex-promise-v2';

const getMoves = async (moves) => {
  const pokedex = new Pokedex();

  const movesFromMostRecentVersion = moves.filter((move) =>
    move.version_group_details.some((version) => version.version_group.name === 'ultra-sun-ultra-moon')
  );

  const movePromises = movesFromMostRecentVersion.map(async (move) => {
    const latestVersion = move.version_group_details.slice(-1)[0];
    const moveResponse = await pokedex.resource(move.move.url);

    return {
      accuracy: moveResponse.accuracy,
      category: moveResponse.damage_class.name,
      learnedAt: latestVersion.level_learned_at,
      method: latestVersion.move_learn_method.name,
      name: move.move.name,
      power: moveResponse.power,
      pp: moveResponse.pp,
      type: moveResponse.type.name,
      url: move.move.url,
    };
  });

  const updatedMoves = await Promise.all(movePromises);

  const sortedMoves = updatedMoves.sort((moveA, moveB) => moveA.learnedAt - moveB.learnedAt);

  return sortedMoves;
};

export default getMoves;
