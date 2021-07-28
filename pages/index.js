import { useState } from 'react';
import { capitalize } from 'lodash';
import getPokemon from '../api/getPokemon';
import Layout from '../components/Layout/layout';
import PokedexData from '../components/PokedexData/pokedexData';
import Moves from '../components/Moves/moves';
import Stats from '../components/Stats/stats';

export default function App({ pokemonList }) {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemonSearchSuggestions, setPokemonSearchSuggestions] = useState(undefined);
  const [searchBarValue, setSearchBarValue] = useState('');

  const onPokemonNameSubmit = (event, pokemonName) => {
    event.preventDefault();

    const getPokemonData = async () => {
      try {
        const pokemonNameParameter = (pokemonName || searchBarValue).toLowerCase();

        const pokemonDataResponse = await getPokemon(pokemonNameParameter);

        setErrorMessage(undefined);
        setPokemonSearchSuggestions(undefined);
        setPokemon(pokemonDataResponse);
      } catch (err) {
        console.error('getPokemonData failed:', err);

        setErrorMessage('Please enter a valid Pokemon name');
      }
    };

    getPokemonData();
  };

  const onPokemonNameChange = (event) => {
    const value = event.target.value;

    setErrorMessage(undefined);
    setPokemonSearchSuggestions(undefined);

    if (value.length >= 2) {
      const filteredList = pokemonList.filter((pokemon) => pokemon.substring(0, value.length) === value.toLowerCase());
      const suggestionList = filteredList.length > 0 ? filteredList : undefined;

      setPokemonSearchSuggestions(suggestionList);
    }

    setSearchBarValue(value);
  };

  const onSuggestionClick = (event) => {
    const value = event.target.innerText;

    setPokemonSearchSuggestions(undefined);
    setSearchBarValue(value);

    onPokemonNameSubmit(event, value);
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center mt-4">
          <input
            className="search-bar"
            name="pokemonName"
            onChange={onPokemonNameChange}
            placeholder="Enter Pokemon Name or Id"
            type="text"
            value={searchBarValue}
          />
          {pokemonSearchSuggestions && (
            <ul className="autocomplete-dropdown">
              {pokemonSearchSuggestions.map((suggestion) => (
                <li className="suggestion" key={suggestion} onClick={onSuggestionClick}>
                  <p>{capitalize(suggestion)}</p>
                </li>
              ))}
            </ul>
          )}
          <input className="search-button" onClick={onPokemonNameSubmit} type="Submit" value="Search" readOnly />
        </div>
        {errorMessage && (
          <div className="text-center error-message">
            <span className="mx-auto error">{errorMessage}</span>
          </div>
        )}
        {pokemon && (
          <div className="flex">
            <img className="w-1/2" src={pokemon.image} alt="logo" />
            <div className="flex flex-wrap w-1/2 px-4 py-2 border-gray-400">
              <div className="w-full">
                <PokedexData pokemon={pokemon} />
              </div>
              <div className="w-full">
                <Stats stats={pokemon.stats} />
              </div>
            </div>
          </div>
        )}
      </Layout>
      {pokemon && <Moves moves={pokemon.moves} />}
    </>
  );
}

export async function getStaticProps() {
  const pokemonList = require('../data/pokemonList.json');

  return {
    props: {
      pokemonList,
    },
  };
}
