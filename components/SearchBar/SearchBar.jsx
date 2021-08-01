import Link from 'next/link';
import { useState } from 'react';
import { capitalize } from 'lodash';
import PokemonList from '../../data/pokemonList.json';
import Layout from '../Layout/layout';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemonSearchSuggestions, setPokemonSearchSuggestions] = useState(undefined);
  const [searchBarValue, setSearchBarValue] = useState('');

  const onPokemonNameSubmit = (event, pokemonName) => {
    event.preventDefault();

    const pokemonNameParameter = (pokemonName || searchBarValue).toLowerCase();

    if (!pokemonNameParameter) {
      return;
    }

    if (!PokemonList.includes(pokemonNameParameter)) {
      setErrorMessage('Please enter a valid Pokemon name');

      return;
    }

    setPokemonSearchSuggestions(undefined);
  };

  const onPokemonNameChange = (event) => {
    const { value } = event.target;

    setErrorMessage(undefined);
    setPokemonSearchSuggestions(undefined);

    if (value.length >= 2) {
      const filteredList = PokemonList.filter((p) => p.substring(0, value.length) === value.toLowerCase());
      const suggestionList = filteredList.length > 0 ? filteredList : undefined;

      setPokemonSearchSuggestions(suggestionList);
    }

    setSearchBarValue(value);
  };

  const onSuggestionClick = (event) => {
    const value = event.target.innerText;
    console.log('here');

    setPokemonSearchSuggestions(undefined);
    setSearchBarValue(value);

    onPokemonNameSubmit(event, value);
  };

  return (
    <Layout>
      <div className="flex justify-center mt-4">
        <input
          className={styles.searchBar}
          name="pokemonName"
          onChange={onPokemonNameChange}
          placeholder="Enter Pokemon Name or Id"
          type="text"
          value={searchBarValue}
        />
        <div>
          {pokemonSearchSuggestions && (
            <ul className={styles.autoCompleteDropdown}>
              {pokemonSearchSuggestions.map((suggestion) => (
                <Link
                  className={styles.autoCompleteDropdown}
                  onClick={onSuggestionClick}
                  href={{ pathname: `pokemon/${suggestion}` }}
                  replace
                  shallow
                  key={suggestion}
                >
                  <a>{capitalize(suggestion)}</a>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <input className={styles.searchButton} onClick={onPokemonNameSubmit} type="Submit" value="Search" readOnly />
      </div>
      {errorMessage && (
        <div className="text-center error-message">
          <span className="mx-auto error">{errorMessage}</span>
        </div>
      )}
    </Layout>
  );
}
