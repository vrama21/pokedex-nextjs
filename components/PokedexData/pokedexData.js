import { capitalize } from 'lodash';
import styles from './pokedexData.module.scss';

const PokedexData = ({ pokemon }) => {
  const nationalDexNumber = `00${pokemon.id}`.slice(-3);

  return (
    <div className={styles.pokedexContainer}>
      <h2 className="font-bold text-center mb-2">Pokedex Data</h2>
      <table className={styles.pokedexTable}>
        <tbody>
          <tr>
            <th>National #</th>
            <td>{nationalDexNumber}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{capitalize(pokemon.name)}</td>
          </tr>
          <tr>
            <th>Type</th>
            {pokemon.types.map((type) => (
              <td className={`pokemon-type-logo type-${type.toLowerCase()}`} key={type}>
                {type}
              </td>
            ))}
          </tr>
          <tr>
            <th>Height</th>
            <td>{pokemon.height / 10} m</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{pokemon.weight / 10} kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokedexData;
