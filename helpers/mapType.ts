import PokeAPI from 'pokedex-promise-v2';
import { PokemonType } from 'types';

export const mapType = (type: PokeAPI.PokemonType): PokemonType => {
  return type.type.name as PokemonType;
};
