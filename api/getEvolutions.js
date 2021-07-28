const getEvolutionsList = async  (evolutionChain, evolutions = []) => {
  const evolutionName = evolutionChain.species.name;
  const evolutionDetails = evolutionChain.evolution_details.length > 0 ? evolutionChain.evolution_details : undefined;
  const evolvesTo = evolutionChain.evolves_to.length > 0 ? evolutionChain.evolves_to : undefined;

  const hasEvolutionDetails = evolutionChain.evolution_details.length > 0;
  const hasEvolutions = evolutionChain.evolves_to.length > 0;

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
    evolvesTo: [{
      name: evolutionName,
      level: evolutionLevel,
      trigger: evolutionTrigger,
      item: evolutionItem
    }],
  }

  evolutions.push(evolution);

  if (!hasEvolutions) {
    return evolutions;
  }

  const nextChain = evolutionChain.evolves_to[0];

  return getEvolutionsList(nextChain, evolutions);
};

export default getEvolutionsList;