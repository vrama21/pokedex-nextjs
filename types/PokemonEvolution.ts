import { PokemonTypeRequirement } from './PokemonTypeRequirement';

export interface PokemonEvolution {
  id: number;
  evolvesFromSpeciesId: string;
  name: string;
  requirements: PokemonTypeRequirement[];
  sprite: string;
}
