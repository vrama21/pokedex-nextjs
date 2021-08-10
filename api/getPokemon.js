import getEvolutionsList from './getEvolutions';
import getMachines from './getMachines';
import getPokemonGraphql from './getPokemonGraphql';
import getPokemonSpeciesGraphql from './getPokemonSpeciesGraphql';
import getMoves from './getMoves';

const getPokemon = async (pokemonName) => {
  const pokemonResponse = await getPokemonGraphql({ pokemon: pokemonName, versionGroupId: 18 });
  const species = await getPokemonSpeciesGraphql({ speciesId: pokemonResponse.pokemon_species_id });
  const moves = getMoves(pokemonResponse.pokemon_v2_pokemonmoves);
  const machines = await getMachines({ versionGroupId: 18 });

  // const evolutionsResponse = await pokedex.resource(speciesResponse.evolution_chain.url);

  // const evolutions = evolutionsResponse.chain.evolves_to.length > 0 ? await getEvolutionsList(evolutionsResponse.chain) : [];

  const data = {
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonResponse.id}.png`,
    stats: {
      hp: pokemonResponse.pokemon_v2_pokemonstats[0].base_stat,
      attack: pokemonResponse.pokemon_v2_pokemonstats[1].base_stat,
      defense: pokemonResponse.pokemon_v2_pokemonstats[2].base_stat,
      specialAttack: pokemonResponse.pokemon_v2_pokemonstats[3].base_stat,
      specialDefense: pokemonResponse.pokemon_v2_pokemonstats[4].base_stat,
      speed: pokemonResponse.pokemon_v2_pokemonstats[5].base_stat,
    },
    types: pokemonResponse.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name),
    speciesId: pokemonResponse.pokemon_species_id,
    height: pokemonResponse.height,
    weight: pokemonResponse.weight,
    // evolutions,
    // evolutionChain: evolutionsResponse.chain,
    moves,
    machines,
  };

  return data;
};

export default getPokemon;
