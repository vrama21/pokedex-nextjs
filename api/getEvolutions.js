import Pokedex from 'pokedex-promise-v2';
import mapEvolutionDetails from './mapEvolutionDetails';

const getEvolutionsList = async (chainObject, evolutions = []) => {
  const pokedex = new Pokedex();
  const currentPokemonName = chainObject.species.name;
  const currentPokemonData = await pokedex.getPokemonByName(currentPokemonName);

  const nextEvolutions = chainObject.evolves_to;

  if (nextEvolutions.length === 0) {
    return evolutions;
  }

  if (evolutions.length === 0) {
    const evolutionModel = {
      // evolutionDetails: chainObject.evolution_details.length ? mapEvolutionDetails(chainObject.evolution_details) : [],
      name: currentPokemonName,
      sprite: currentPokemonData.sprites.front_default,
    };

    evolutions.push(evolutionModel);
  }

  // const nextEvolution = nextEvolutions.map(async (evolutionChain) => getEvolutionsList(evolutionChain, evolutions));

  // console.log({ nextEvolution });

  const evolutionChainPromises = nextEvolutions.map(async (nextEvolution) => {
    const nextEvolutionName = nextEvolution.species.name;
    const nextPokemonData = await pokedex.getPokemonByName(nextEvolutionName);
    // const nextEvolutionDetails = nextEvolution.evolution_details.length ? mapEvolutionDetails(nextEvolution.evolution_details) : [];

    return {
      name: nextEvolutionName,
      sprite: nextPokemonData.sprites.front_default,
      // evolutionDetails: nextEvolutionDetails,
    };
  });

  const evolutionChain = await Promise.all(evolutionChainPromises);

  evolutions.push(...evolutionChain);

  return getEvolutionsList(chainObject.evolves_to[0], evolutions);
};
