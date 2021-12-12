import { PokemonTypeRequirement } from './PokemonTypeRequirement';

export interface PokemonEvolution {
  id: string;
  evolvesFromSpeciesId: string;
  name: string;
  requirements: PokemonTypeRequirement[];
  sprite: string;
}
