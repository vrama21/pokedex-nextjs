import { Move, PokemonMove } from 'pokedex-promise-v2';

export const mapMove = (pokemonMove: any) => {
  const move = pokemonMove.pokemon_v2_move;

  return {
    name: move.name,
  };
};
