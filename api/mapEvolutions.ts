const mapEvolutions = (evolutionChain) => {
  const evolutions = evolutionChain
    .map((species) => {
      const requirements = species.pokemon_v2_pokemonevolutions.map((requirement) => {
        return {
          heldItem: requirement.pokemonV2ItemByHeldItemId ? requirement.pokemonV2ItemByHeldItemId.name : null,
          item: requirement.pokemon_v2_item ? requirement.pokemon_v2_item.name : null,
          knownMove: requirement.pokemon_v2_move ? requirement.pokemon_v2_move.name : null,
          minAffection: requirement.min_affection,
          minBeauty: requirement.min_beauty,
          minHappiness: requirement.min_happiness,
          minLevel: requirement.min_level,
          location: requirement.pokemon_v2_location ? requirement.pokemon_v2_location.name : null,
          timeOfDay: requirement.time_of_day,
          trigger: requirement.pokemon_v2_evolutiontrigger.name,
        };
      });

      return {
        id: species.id,
        evolvesFromSpeciesId: species.evolves_from_species_id,
        name: species.name,
        requirements,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.id}.png`,
      };
    })
    .sort((evolutionA) => {
      if (!evolutionA.evolvesFromSpeciesId) return -1;

      return 0;
    });

  return evolutions;
};

export default mapEvolutions;
