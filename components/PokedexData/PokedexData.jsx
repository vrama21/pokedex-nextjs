import { capitalize } from 'lodash';
import Container from '../Container/Container';
import Type from '../Type/Type';
import styles from './PokedexData.module.scss';

const PokedexData = ({ pokemon }) => {
  const nationalDexNumber = `00${pokemon.id}`.slice(-3);

  return (
    <Container>
      <h2 className="font-bold text-center mb-2">Pokedex Data</h2>
      <div className="flex justify-center py-1 align-middle">
        <p className={styles.pokedexKey}>National #</p>
        <p className="w-1/2 text-left text-sm">{nationalDexNumber}</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Name</p>
        <p className="w-1/2 text-left text-sm">{capitalize(pokemon.name)}</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Type</p>
        <div className="w-1/2 text-left flex">
          {pokemon.types.map((type) => (
            <div className="mr-2" key={type}>
              <Type type={type} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Height</p>
        <p className="w-1/2 text-left text-sm">{pokemon.height / 10} m</p>
      </div>
      <div className="flex justify-center py-1">
        <p className={styles.pokedexKey}>Weight</p>
        <p className="w-1/2 text-left text-sm">{pokemon.weight / 10} kg</p>
      </div>
    </Container>
  );
};

export default PokedexData;
