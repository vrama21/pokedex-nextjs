import { PokemonMove } from './PokemonMove';
import { PokemonStats } from './pokemonStats';
import { PokemonType } from './PokemonType';

export interface PokemonResponse {
  height: number;
  id: string;
  image: string;
  name: string;
  moves: PokemonMove[];
  stats: PokemonStats;
  types: PokemonType[];
  weight: number;
}
