import { startCase } from 'lodash';
import Layout from '../Layout/layout';
import Evolution from '../Evolution/Evolution';

const Evolutions = ({ evolutions, evolutionChain }) => {
  // console.log(evolutions, evolutions);
  const hasEvolutions = evolutions.length > 0;
  const pokemonName = startCase(evolutions.name);

  /* 
  const evolutionMethodsRenter = {
    {evolutionMethods && (
    <div>
      {evolution.evolutionMethods.map((evolutionDetail, evolutionDetailIndex) => {
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
};
*/

  const evolutionsRender = evolutions.map((evolution) => {
    const evolutionName = startCase(evolution.name);
    // const evolutionMethods = evolution.evolutionMethods.length > 0;

    return (
      <div key={evolutionName}>
        <img className="mx-auto" src={evolution.sprite} alt={evolution.name} />
        <p className="text-center">{evolutionName}</p>
        {/* {evolution.length > 0 && <Evolutions evolutions={evolution} />} */}
      </div>
    );
  });

  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-evenly w-3/4 mx-auto">{evolutions.length > 0 ? evolutionsRender : 'There are no evolutions for this Pokemon'}</div>
    </Layout>
  );
};

export default Evolutions;
