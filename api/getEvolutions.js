const getEvolutionsList = async (chainObject, pokedex, evolutions = []) => {
  console.log({ chainObject });
  const currentPokemonName = chainObject.species.name;
  const currentPokemonData = await pokedex.getPokemonByName(currentPokemonName);

  const nextEvolutions = chainObject.evolves_to;

  const evolutionModel = {
    name: currentPokemonName,
    sprite: currentPokemonData.sprites.front_default,
  };

  if (nextEvolutions.length === 0) {
    return evolutions;
  }

  if (evolutions.length === 0) {
    evolutions.push(evolutionModel);
  }
  const evolutionChainPromises = nextEvolutions.map(async (nextEvolution) => {
    const pokemonName = nextEvolution.species.name;
    const pokemonData = await pokedex.getPokemonByName(pokemonName);

    // const evolutionDetails = evolution.evolution_details.map((evolutionDetail) => {
    //   const detailKeys = Object.keys(evolutionDetail).filter((detailKey) => evolutionDetail[detailKey] && detailKey !== 'trigger');
    //   const requirements = detailKeys.map((key) => ({
    //     [key]: evolutionDetail[key],
    //   }));
    //
    //   return {
    //     trigger: evolutionDetail.trigger.name,
    //     requirements,
    //   };
    // });

    // Object.assign(evolution);
    // evolution.sprite = pokemonData.sprites.front_default;
    // evolution.name = pokemonName;
    // evolution.evolution_details = evolutionDetails;

    return {
      // evolution,
      name: pokemonName,
      sprite: pokemonData.sprites.front_default,
      // evolution_details: evolutionDetails,
    };
  });

  const evolutionChain = await Promise.all(evolutionChainPromises);

  evolutions.push(...evolutionChain);

  return getEvolutionsList(chainObject.evolves_to[0], pokedex, evolutions);
};

export default getEvolutionsList;
