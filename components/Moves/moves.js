import Layout from '../Layout/layout';
import { chunk, startCase } from 'lodash';

const Moves = ({ pokemon }) => {
  console.log(pokemon);

  const moves = pokemon.moves.map((move) => {
    const moveName = startCase(move.move.name).replace('-', ' ');
    const mostRecentVersionGroup = move.version_group_details.splice(-1)[0];
    const levelLearnedAt = mostRecentVersionGroup.level_learned_at === 0 ? 1 : mostRecentVersionGroup.level_learned_at;

    return (
      <div className="inline-block" key={moveName}>
        <p>{moveName}</p>
        <p>{levelLearnedAt}</p>
      </div>
    );
  });

  return (
    <Layout>
      <div>{moves}</div>
    </Layout>
  );
};

export default Moves;
