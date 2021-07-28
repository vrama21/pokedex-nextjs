const getEvolutionsList = async (evolutionChain, prevChain, evolutions = [], evolutionStep = 0) => {
  const evolutionName = evolutionChain.species.name;

  const hasEvolutionDetails = evolutionChain.evolution_details.length > 0;
  const hasEvolutions = evolutionChain.evolves_to.length > 0;
  const hasMultipleEvolutions = prevChain.length > 1;

  let evolutionLevel;
  let evolutionTrigger;
  let evolutionItem;

  if (hasEvolutionDetails) {
    const evolutionDetails = evolutionChain.evolution_details[0]
    evolutionLevel = evolutionDetails.min_level;
    evolutionTrigger = evolutionDetails.trigger.name
    evolutionItem = evolutionTrigger === 'use-item' ? evolutionDetails.item.name : undefined;
  }

  const evolution = {
    name: evolutionName,
    level: evolutionLevel,
    trigger: evolutionTrigger,
    item: evolutionItem
  }

  evolutions.push(evolution);

  if (hasMultipleEvolutions) {
    evolutionStep += 1

    return getEvolutionsList(prevChain[evolutionStep], evolutionChain, evolutions, evolutionStep);
  }

  if (!hasEvolutions) {
    return evolutions;
  }

  evolutionStep = 0;

  return getEvolutionsList(evolutionChain.evolves_to[0], evolutionChain.evolves_to, evolutions, evolutionStep);
};

export default getEvolutionsList;