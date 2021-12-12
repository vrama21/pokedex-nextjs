import { PokemonEvolution } from './PokemonEvolution';
import { PokemonMove } from './PokemonMove';
import { PokemonStats } from './PokemonStats';
import { PokemonType } from './PokemonType';

export interface PokemonResponse {
  evolutions: PokemonEvolution[];
  height: number;
  id: string;
  image: string;
  name: string;
  moves: PokemonMove[];
  stats: PokemonStats;
  types: PokemonType[];
  weight: number;
}
