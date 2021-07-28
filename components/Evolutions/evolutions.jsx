import { capitalize } from 'lodash';
import Layout from '../Layout/layout';

const Evolutions = ({ evolutions }) => {
  const evolutionChain = evolutions.map((evolution) => {
    const hasEvolutionDetails = evolution.evolutionDetails.length > 0;

    return (
      <div key={evolution.name}>
        <div>
          {hasEvolutionDetails &&
            evolution.evolutionDetails.map((evolutionDetail) => {
              const trigger = evolutionDetail.trigger.name;
              const method = trigger === 'level-up' && `Lv ${evolutionDetail.min_level}`;
              console.log(evolutionDetail)

              return (
                <span key={evolution.trigger}>
                  <p>{method}</p>
                </span>
              );
            })}
        </div>
        <div key={evolution.name}>
          <img src={evolution.sprite} alt={evolution.name} />
          <p className="text-center">{capitalize(evolution.name)}</p>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-evenly">{evolutionChain}</div>
    </Layout>
  );
};

module.exports = Evolutions;
