import { PokemonMove } from 'types';

export const mapMove = (pokemonMove: any): PokemonMove => {
  return {
    id: pokemonMove.id,
    accuracy: pokemonMove.move.accuracy,
    category: pokemonMove.move.damageclass.name,
    level: pokemonMove.level,
    method: pokemonMove.learnmethod.name,
    name: pokemonMove.move.name,
    power: pokemonMove.move.power,
    pp: pokemonMove.move.pp,
    type: pokemonMove.move.type.name,
  };
};
