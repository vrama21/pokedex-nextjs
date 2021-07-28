const getEvolutionsList = async (evolutionChain, prevChain, pokedex, evolutions = [], evolutionStep = 0) => {
  if (prevChain.length && evolutionStep >= prevChain.length) {
    return evolutions
  }

  console.log({ evolutionChain })

  const pokemonName = evolutionChain.species.name;

  const hasEvolutionDetails = evolutionChain.evolution_details.length > 0;
  const hasEvolutions = prevChain.length > 0;
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

  const pokemonData = await pokedex.getPokemonByName(pokemonName)

  const evolution = {
    name: pokemonName,
    sprite: pokemonData.sprites.front_default,
    level: evolutionLevel,
    trigger: evolutionTrigger,
    item: evolutionItem
  }

  evolutions.push(evolution);

  if (hasMultipleEvolutions && evolutionStep <= prevChain.length) {
    evolutionStep += 1

    return getEvolutionsList(prevChain[evolutionStep], prevChain, pokedex, evolutions, evolutionStep);
  }

  if (!hasEvolutions) {
    return evolutions;
  }

  evolutionStep = 0;

  return getEvolutionsList(evolutionChain.evolves_to[0], evolutionChain, pokedex, evolutions, evolutionStep);
};

export default getEvolutionsList;