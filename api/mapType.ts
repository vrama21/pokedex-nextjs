import { PokemonType } from 'types';

interface TypeResponse {
  pokemon_v2_type: { name: PokemonType };
}

export const mapType = (type: TypeResponse): PokemonType => {
  return type.pokemon_v2_type.name;
};
