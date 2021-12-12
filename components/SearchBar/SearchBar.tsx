import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, ReactChildren, useState } from 'react';
import { capitalize } from 'lodash';
import PokemonList from 'data/pokemonList.json';
import { PageLayout } from 'layouts';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [pokemonSearchSuggestions, setPokemonSearchSuggestions] = useState<string[]>([]);
  const [searchBarValue, setSearchBarValue] = useState('');
  const router = useRouter();

  const onPokemonNameChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    setErrorMessage(undefined);
    setPokemonSearchSuggestions([]);

    if (value.length >= 2) {
      const filteredList = PokemonList.map((p) => p.name).filter((pokemon) => pokemon.substring(0, value.length) === value.toLowerCase());
      const suggestionList = filteredList.length > 0 ? filteredList : [];

      setPokemonSearchSuggestions(suggestionList);
    }

    setSearchBarValue(value);
  };

  const onSuggestionClick = (event: MouseEvent, pokemon: string) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    const { value } = target;

    setPokemonSearchSuggestions([]);
    setSearchBarValue(value);

    const redirectPath = router.pathname.includes('pokemon') ? pokemon : `pokemon/${pokemon}`;
    router.push(redirectPath);
  };

  return (
    <div className="flex justify-center flex-col w-2/5 mx-auto my-4 relative">
      <div>
        <input
          className={styles.searchBar}
          name="pokemon"
          onChange={onPokemonNameChange}
          placeholder="Enter Pokemon Name"
          type="text"
          value={searchBarValue}
        />
      </div>
      {pokemonSearchSuggestions.length > 0 && (
        <ul className={styles.autoCompleteDropdown}>
          {pokemonSearchSuggestions.map((pokemon) => (
            <li key={pokemon}>
              <a onClick={(event) => onSuggestionClick(event, pokemon)} role="button">
                {capitalize(pokemon)}
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && (
        <div className="text-center error-message">
          <span className="mx-auto error">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

SearchBar.getLayout = function getLayout(page: ReactChildren) {
  return <PageLayout>{page}</PageLayout>;
};

export default SearchBar;
