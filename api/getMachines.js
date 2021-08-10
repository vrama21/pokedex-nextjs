import getMachinesByVersionGroupId from './getMachinesByVersionGroupId';

const getMachines = async ({ versionGroupId }) => {
  const machinesResponse = await getMachinesByVersionGroupId({ versionGroupId });

  const machines = machinesResponse.map((machine) => ({
    name: machine.pokemon_v2_move.name,
    item: machine.pokemon_v2_item.name,
  }));

  return machines;
};

export default getMachines;
