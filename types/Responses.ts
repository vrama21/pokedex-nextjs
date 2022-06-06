export interface PokemonEvolutionChainResponse {
  id: number;
  species: PokemonSpeciesResponse[];
}

export interface PokemonSpeciesResponse {
  evolutions: PokeAPIEvolution[];
  evolution_chain_id?: number;
  evolves_from_species_id: null;
  id: number;
  name: string;
}

export interface PokeAPIEvolution {
  requirement: string
}

export interface PokeAPIRequirement {
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  time_of_day: string;
}