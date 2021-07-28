const getMoves = async (movesResponse) => {
  const movesFromMostRecentVersion = movesResponse
    .filter((move) => move.version_group_details.some((version) => (
      version.version_group.name === 'ultra-sun-ultra-moon' || version.version_group.name === 'sun-moon'
    )));

  const moves = movesFromMostRecentVersion
    .map((move) => {
      const [latestVersion] = move.version_group_details.slice(-1);

      return {
        learnedAt: latestVersion.level_learned_at,
        method: latestVersion.move_learn_method.name,
        name: move.move.name,
      };
    })
    .sort((moveA, moveB) => moveA.learnedAt - moveB.learnedAt);

  return moves;
};

export default getMoves;