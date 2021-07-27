const Pokedex = require('pokedex-promise-v2');

const getPokemon = async (pokemonName) => {
  const pokedex = new Pokedex();

  const pokemon = await pokedex.getPokemonByName(pokemonName);
  const species = await pokedex.getPokemonSpeciesByName(pokemonName);
  const evolutions = await pokedex.resource(species.evolution_chain.url);

  console.log({ pokemon, species, evolutions });

  const levelUpMoves = pokemon.moves
    .filter((move) =>
      move.version_group_details.some((version) => version.version_group.name === 'ultra-sun-ultra-moon' || version.version_group.name === 'sun-moon')
    )
    .map((move) => {
      const [latestVersion] = move.version_group_details.slice(-1);

      return {
        learnedAt: latestVersion.level_learned_at,
        method: latestVersion.move_learn_method.name,
        name: move.move.name,
      };
    })
    .sort((moveA, moveB) => moveA.learnedAt - moveB.learnedAt);

  const getEvolutionsList = (evolutionChain, evolutions = []) => {
    const evolutionName = evolutionChain.species.name;

    evolutions.push(evolutionName);

    if (evolutionChain.evolves_to.length === 0) {
      return evolutions;
    }

    const nextChain = evolutionChain.evolves_to[0];

    return getEvolutionsList(nextChain, evolutions);
  };

  const data = {
    id: pokemon.id,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
    stats: {
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
    },
    types: pokemon.types.map((type) => type.type.name),
    height: pokemon.height,
    weight: pokemon.weight,
    moves: levelUpMoves,
    evolutions: getEvolutionsList(evolutions.chain),
  };

  console.log(data);

  return data;
};

export { getPokemon };
