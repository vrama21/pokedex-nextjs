import PokeAPI from 'pokedex-promise-v2';

export interface Pokemon extends PokeAPI.Pokemon {
  pokemon_species_id: number;
}
