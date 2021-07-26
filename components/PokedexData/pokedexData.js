import Container from '../Container/container';
import { capitalize } from 'lodash';
import styles from './pokedexData.module.scss';

const PokedexData = ({ pokemon }) => {
  const nationalDexNumber = `00${pokemon.id}`.slice(-3);

  return (
    <Container>
      <h2 className="font-bold text-center mb-2">Pokedex Data</h2>
      <div className="flex justify-center py-1 align-middle">
        <p className={styles.pokedexKey}>National #</p>
        <p className="w-1/2 text-left">{nationalDexNumber}</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Name</p>
        <p className="w-1/2 text-left">{capitalize(pokemon.name)}</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Type</p>
        <div className="w-1/2 text-left">
          {pokemon.types.map((type) => (
            <p className={`${styles.pokemonTypeLogo} type-${type.toLowerCase()}`} key={type}>
              {type}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Height</p>
        <p className="w-1/2 text-left">{pokemon.height / 10} m</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Weight</p>
        <p className="w-1/2 text-left">{pokemon.weight / 10} kg</p>
      </div>
    </Container>
  );
};

export default PokedexData;
