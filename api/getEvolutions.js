const getEvolutionsList = async (nextEvolution, pokedex, evolutions = []) => {
  const prevPokemonName = nextEvolution.species.name;
  const hasEvolutions = nextEvolution.evolves_to.length > 0;

  if (!hasEvolutions) {
    return evolutions;
  }

  const evolutionChainPromises = nextEvolution.evolves_to.map(async (evolution) => {
    const pokemonName = evolution.species.name;
    const pokemonData = await pokedex.getPokemonByName(pokemonName);

    const evolutionMethods = evolution.evolution_details.map((evolutionDetail) => {
      const detailKeys = Object.keys(evolutionDetail).filter((detailKey) => evolutionDetail[detailKey] && detailKey !== 'trigger');
      const requirements = detailKeys.map((key) => ({
        [key]: evolutionDetail[key],
      }));

      return {
        trigger: evolutionDetail.trigger.name,
        requirements,
      };
    });

    const evolutionModel = {
      name: pokemonName,
      sprite: pokemonData.sprites.front_default,
      evolutionDetails: evolutionMethods,
      evolvesFrom: prevPokemonName,
    };

    return evolutionModel;
  });

  const evolutionChain = await Promise.all(evolutionChainPromises);

  evolutions.push(...evolutionChain);

  return getEvolutionsList(nextEvolution.evolves_to[0], pokedex, evolutions);
};

export default getEvolutionsList;
