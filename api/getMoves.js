import Pokedex from 'pokedex-promise-v2';

const getMoves = async (movesResponse) => {
  const pokedex = new Pokedex();

  const movesFromMostRecentVersion = movesResponse.filter((move) =>
    move.version_group_details.some((version) => version.version_group.name === 'ultra-sun-ultra-moon' || version.version_group.name === 'sun-moon')
  );

  const moves = movesFromMostRecentVersion
    .map(async (move) => {
      const [latestVersion] = move.version_group_details.slice(-1);

      const moveResponse = await pokedex.resource(move.move.url);

      return {
        learnedAt: latestVersion.level_learned_at,
        method: latestVersion.move_learn_method.name,
        name: move.move.name,
        type: moveResponse.type.name,
        url: move.move.url,
      };
    })
    .sort((moveA, moveB) => moveA.learnedAt - moveB.learnedAt);

  return Promise.all(moves);
};

export default getMoves;
