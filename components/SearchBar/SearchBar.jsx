/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { capitalize } from 'lodash';
import PokemonList from '../../data/pokemonList.json';
import Layout from '../Layout/Layout';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemonSearchSuggestions, setPokemonSearchSuggestions] = useState(undefined);
  const [searchBarValue, setSearchBarValue] = useState('');
  const router = useRouter();
  const isHomePage = router.pathname === '/';

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

  const onSuggestionClick = (event, pokemon) => {
    event.preventDefault();

    const value = event.target.innerText;

    setPokemonSearchSuggestions(undefined);
    setSearchBarValue(value);

    const redirectPath = isHomePage ? `pokemon/${pokemon}` : pokemon;
    router.push(redirectPath);
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
              {pokemonSearchSuggestions.map((pokemon) => (
                <a key={pokemon} onClick={(event) => onSuggestionClick(event, pokemon)} role="button">
                  {capitalize(pokemon)}
                </a>
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
