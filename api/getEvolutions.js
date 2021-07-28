const getEvolutionsList = async (evolutionChain, prevChain, pokedex, evolutions = [], evolutionStep = 0) => {
  if (prevChain.length && evolutionStep >= prevChain.length) {
    return evolutions;
  }
  let currentEvolutionStep = evolutionStep;

  const pokemonName = evolutionChain.species.name;

  const hasEvolutionDetails = evolutionChain.evolution_details.length > 0;
  const hasEvolutions = prevChain.length > 0;
  const hasMultipleEvolutions = prevChain.length > 1;

  const evolutionDetails = hasEvolutionDetails
    ? evolutionChain.evolution_details.map((evolutionDetail) => ({
        trigger: evolutionDetail.trigger.name,
        ...evolutionDetail,
      }))
    : [];

  const pokemonData = await pokedex.getPokemonByName(pokemonName);

  const evolution = {
    name: pokemonName,
    sprite: pokemonData.sprites.front_default,
    evolutionDetails,
  };

  evolutions.push(evolution);

  if (hasMultipleEvolutions && evolutionStep <= prevChain.length) {
    currentEvolutionStep += 1;

    return getEvolutionsList(prevChain[currentEvolutionStep], prevChain, pokedex, evolutions, evolutionStep);
  }

  if (!hasEvolutions) {
    return evolutions;
  }

  currentEvolutionStep = 0;

  return getEvolutionsList(evolutionChain.evolves_to[0], evolutionChain, pokedex, evolutions, evolutionStep);
};

export default getEvolutionsList;
