const fs = require('fs');
const path = require('path');
const Pokedex = require('pokedex-promise-v2');

const pokedex = new Pokedex();

const getAllPokemon = async () => {
  const response = await pokedex.getPokemonsList({ limit: 1200 });

  const pokemonListResults = response.results;
  const pokemonList = pokemonListResults.map((result) => {
    const { name, url } = result;
    const id = url.split('/').slice(-2)[0];

    console.log(`Adding ${name}: ${id}...`);

    return {
      name,
      id,
    };
  });

  const pokemonListJson = JSON.stringify(pokemonList);

  const parentPath = path.dirname(__dirname);
  const pokemonListJsonPath = `${parentPath}/data/pokemonList.json`;

  fs.writeFileSync(pokemonListJsonPath, pokemonListJson);

  console.log('getAllPokemon script is complete.');
};

getAllPokemon();
