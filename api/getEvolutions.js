const getEvolutionsList = async (chainObject, pokedex) => {
  const prevPokemonName = chainObject.species.name;

  const evolutionChainPromises = chainObject.evolves_to.map(async (evolution) => {
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
      evolutionMethods,
      evolvesTo: evolution.evolves_to,
    };

    return evolutionModel;
  });

  const evolutionChain = await Promise.all(evolutionChainPromises);

  const prevPokemonData = await pokedex.getPokemonByName(prevPokemonName);

  const updatedChainObject = {
    name: prevPokemonName,
    sprite: prevPokemonData.sprites.front_default,
    evolutionMethods: chainObject.evolution_details,
    evolvesTo: evolutionChain,
  };

  return updatedChainObject;
};

export default getEvolutionsList;
