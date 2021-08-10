import Pokedex from 'pokedex-promise-v2';

const getMachines = async (moves) => {
  const pokedex = new Pokedex();

  const machineMovesPromises = moves
    .filter((move) => move.method === 'machine')
    .map(async (move) => {
      const moveResponse = await pokedex.resource(move.url);
      const latestMachineUrl = moveResponse.machines.slice(-1)[0].machine.url;

      const machineResponse = await pokedex.resource(latestMachineUrl);

      return machineResponse;
    });

  const machineMoves = await Promise.all(machineMovesPromises);

  const sortedMoves = machineMoves
    .sort((move1, move2) => {
      const move1TmNumber = move1.item.name.slice(2);
      const move2TmNumber = move2.item.name.slice(2);

      return move1TmNumber - move2TmNumber;
    })
    .sort((moveA, moveB) => {
      if (moveA.item.name.includes('tm') && moveB.item.name.includes('hm')) return -1;
      if (moveA.item.name.includes('hm') && moveB.item.name.includes('tm')) return 1;

      return 0;
    });

  return sortedMoves;
};

module.exports = getMachines;
