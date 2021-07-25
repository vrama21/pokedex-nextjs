import { useState } from 'react';
import { getPokemon } from '../api/getPokemon';
import Layout from '../components/Layout/layout';
import PokedexData from '../components/PokedexData/pokedexData';
import Moves from '../components/Moves/moves';
import Stats from '../components/Stats/stats';
import { GetStaticProps } from 'next';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemon, setPokemon] = useState(undefined);
  const [searchBarValue, setSearchBarValue] = useState('');

  const pokemonNameSubmit = (event) => {
    event.preventDefault();

    const getPokemonData = async () => {
      try {
        const pokemonDataResponse = await getPokemon(searchBarValue);

        setErrorMessage(undefined);

        setPokemon(pokemonDataResponse);
      } catch (err) {
        console.error('getPokemonData failed:', err);

        setErrorMessage('Please enter a valid Pokemon name');
      }
    };

    getPokemonData();
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center mb-4 my-4">
          <input
            className="search-bar"
            name="pokemonName"
            onChange={(event) => setSearchBarValue(event.target.value)}
            placeholder="Enter Pokemon Name"
            type="text"
            value={searchBarValue}
          />
          <input className="search-button" onClick={pokemonNameSubmit} type="submit" value="Search" />
        </div>
        {errorMessage && (
          <div className="text-center">
            <span className="mx-auto error">{errorMessage}</span>
          </div>
        )}
        {pokemon && (
          <div className="flex">
            <img className="w-1/2" src={pokemon.image} alt="logo" />
            <div className="w-1/2 px-4 py-2 border-gray-400">
              <PokedexData pokemon={pokemon} />
              <Stats stats={pokemon.stats} />
            </div>
          </div>
        )}
      </Layout>
      {/* {pokemon && <Moves pokemon={pokemon} />} */}
    </>
  );
};

export default App;
