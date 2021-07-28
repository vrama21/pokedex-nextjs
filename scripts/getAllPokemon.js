import fs from 'fs';
import path from 'path';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

const getAllPokemon = async () => {
  const response = await P.getPokemonsList({ limit: 1200 });

  const pokemonListResults = response.results;
  const pokemonList = pokemonListResults.map((result) => result.name);
  const pokemonListJson = JSON.stringify(pokemonList);

  const parentPath = path.dirname(__dirname);
  const pokemonListJsonPath = `${parentPath}/data/pokemonList.json`;

  fs.writeFileSync(pokemonListJsonPath, pokemonListJson);
};

getAllPokemon();
