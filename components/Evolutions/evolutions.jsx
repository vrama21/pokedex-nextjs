import { capitalize, startCase } from 'lodash';
import Layout from '../Layout/layout';

const Evolutions = ({ evolutions }) => {
  const hasEvolutions = evolutions.length > 0;

  const evolutionChain =
    hasEvolutions &&
    evolutions.map((evolution) => {
      const hasEvolutionDetails = evolution.evolutionDetails.length > 0;

      return (
        <div key={evolution.name}>
          {hasEvolutionDetails && (
            <div>
              {evolution.evolutionDetails.map((evolutionDetail, evolutionDetailIndex) => {
                const trigger = evolutionDetail.trigger.name;
                const levelUp = trigger === 'level-up' && evolutionDetail.min_level && `(Lv ${evolutionDetail.min_level})`;
                const levelUpTimeOfDay =
                  trigger === 'level-up' && evolutionDetail.time_of_day && `Level at ${capitalize(evolutionDetail.time_of_day)}`;
                const levelUpWithKnownMoveType =
                  trigger === 'level-up' &&
                  evolutionDetail.known_move_type &&
                  `Level with a ${capitalize(evolutionDetail.known_move_type.name)} Move`;
                const levelUpInSpecificLocation =
                  trigger === 'level-up' && evolutionDetail.location && `Level at ${startCase(evolutionDetail.location.name.replace('-', ' '))}`;
                const useItem = trigger === 'use-item' && startCase(evolutionDetail.item.name.replace('-', ' '));

                const method = levelUp || levelUpTimeOfDay || levelUpWithKnownMoveType || levelUpInSpecificLocation || useItem;

                return (
                  <span key={evolutionDetailIndex}>
                    <p className="text-center">{method}</p>
                  </span>
                );
              })}
            </div>
          )}
          <div key={evolution.name}>
            <img className="mx-auto" src={evolution.sprite} alt={evolution.name} />
            <p className="text-center">{capitalize(evolution.name)}</p>
          </div>
        </div>
      );
    });

  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-evenly">{hasEvolutions ? evolutionChain : 'This Pokemon does not evolve'}</div>
    </Layout>
  );
};

module.exports = Evolutions;
