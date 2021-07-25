import Layout from '../Layout/layout';
import { chunk } from 'lodash';

const Moves = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <Layout>
      {pokemon.moves.map((move) => (
        <div key={move.move.name}>{move.move.name}</div>
      ))}
    </Layout>
  );
};

export default Moves;
