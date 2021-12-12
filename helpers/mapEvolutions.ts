import { PokemonEvolution } from 'types';

const mapEvolutions = (evolutionChain: any): PokemonEvolution[] => {
  const evolutions = evolutionChain
    .map((species: any) => {
      const requirements = species.evolutions.map((requirement: any) => {
        return {
          heldItem: requirement.itemByHeldItemId ? requirement.itemByHeldItemId.name : null,
          item: requirement.item ? requirement.item.name : null,
          knownMove: requirement.move ? requirement.move.name : null,
          minAffection: requirement.min_affection,
          minBeauty: requirement.min_beauty,
          minHappiness: requirement.min_happiness,
          minLevel: requirement.min_level,
          location: requirement.location ? requirement.location.name : null,
          timeOfDay: requirement.time_of_day,
          trigger: requirement.evolution_trigger.name,
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
    .sort((evolutionA: any) => {
      if (!evolutionA.evolvesFromSpeciesId) return -1;

      return 0;
    });

  return evolutions;
};

export default mapEvolutions;
