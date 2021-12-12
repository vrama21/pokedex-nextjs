import getMachinesByVersionGroupId from './getMachinesByVersionGroupId';

export const getMachines = async ({ versionGroupId }: { versionGroupId: number }) => {
  const machinesResponse = await getMachinesByVersionGroupId({ versionGroupId });

  const machines = machinesResponse.map((machine) => ({
    name: machine.move.name,
    item: machine.item.name,
  }));

  return machines;
};
