import { useState } from 'react';
import { getPokemon } from '../api/getPokemon';
import { capitalize } from 'lodash';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemonData, setPokemonData] = useState(undefined);
  const [pokemonImage, setPokemonImage] = useState(undefined);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonStats, setPokemonStats] = useState({});
  const pokemonTypes = pokemonData && pokemonData.types.map((type) => capitalize(type.type.name));

  const pokemonNameSubmit = (event) => {
    event.preventDefault();

    const getPokemonData = async () => {
      try {
        const pokemonDataResponse = await getPokemon(pokemonName);

        setErrorMessage(undefined);

        const stats = {
          hp: pokemonDataResponse.stats[0].base_stat,
          attack: pokemonDataResponse.stats[1].base_stat,
          defense: pokemonDataResponse.stats[2].base_stat,
          specialAttack: pokemonDataResponse.stats[3].base_stat,
          specialDefense: pokemonDataResponse.stats[4].base_stat,
          speed: pokemonDataResponse.stats[5].base_stat,
        };

        const imgPath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDataResponse.id}.png`;

        setPokemonData(pokemonDataResponse);
        setPokemonImage(imgPath);
        setPokemonStats(stats);
      } catch (err) {
        console.error('getPokemonData failed:', err);

        setErrorMessage('Please enter a valid Pokemon name');
      }
    };

    getPokemonData();
  };

  const displayTypes =
    pokemonTypes &&
    pokemonTypes.map((type) => {
      return (
        <span className={`pokemon-type-logo type-${type.toLowerCase()}`} key={type}>
          {type}
        </span>
      );
    });

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center mb-4 my-4">
          <input
            className="search-bar"
            name="pokemonName"
            onChange={(event) => setPokemonName(event.target.value)}
            placeholder="Enter Pokemon Name"
            type="text"
            value={pokemonName}
          />
          <input className="search-button" onClick={pokemonNameSubmit} type="submit" value="Search" />
        </div>
        {errorMessage && (
          <div className="text-center">
            <span className="mx-auto error">{errorMessage}</span>
          </div>
        )}
        {pokemonData && (
          <div>
            <div className="flex justify-center">
              <p>#{pokemonData.id}</p>
              <p className="ml-4">{capitalize(pokemonData.name)}</p>
            </div>
            <img src={pokemonImage} className="App-logo" alt="logo" />
            <p>Types:</p>
            {displayTypes}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
