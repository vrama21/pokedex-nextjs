const mapEvolutions = (evolutionChain) => {
  const evolutions = evolutionChain.map((species) => ({
    ...species,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.id}.png`,
  }));

  return evolutions;
};

export default mapEvolutions;
