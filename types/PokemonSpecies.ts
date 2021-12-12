import PokeAPI from 'pokedex-promise-v2';

export interface PokemonSpecies extends PokeAPI.PokemonSpecies {
  evolution_chain_id: number;
}
