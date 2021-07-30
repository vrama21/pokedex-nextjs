import { capitalize, startCase } from 'lodash';
import styles from './evolutionDetails.module.scss';

const EvolutionDetail = ({ evolutionDetail }) => {
  const { trigger, requirements } = evolutionDetail;

  const minLevelRequirement = requirements.find((requirement) => requirement.min_level);
  const timeOfDayRequirement = requirements.find((requirement) => requirement.time_of_day);
  const knownMoveTypeRequirement = requirements.find((requirement) => requirement.known_move_type);
  const locationRequirement = requirements.find((requirement) => requirement.location);
  const useItemRequirement = requirements.find((requirement) => requirement.item);

  const levelUp = trigger === 'level-up' && minLevelRequirement && `(Lv ${minLevelRequirement.min_level})`;
  const levelUpTimeOfDay = trigger === 'level-up' && timeOfDayRequirement && `Level at ${capitalize(timeOfDayRequirement.time_of_day)}`;
  const levelUpWithKnownMoveType =
    trigger === 'level-up' && knownMoveTypeRequirement && `Level with a ${capitalize(knownMoveTypeRequirement.name)} Move`;
  const levelUpInSpecificLocation =
    trigger === 'level-up' && locationRequirement && `Level at ${startCase(locationRequirement.location.name.replace('-', ' '))}`;
  const useItem = trigger === 'use-item' && useItemRequirement && startCase(useItemRequirement.item.name.replace('-', ' '));

  const method = levelUp || levelUpTimeOfDay || levelUpWithKnownMoveType || levelUpInSpecificLocation || useItem;

  return (
    <div>
      <p className={styles.evolutionDetail}>{method}</p>
    </div>
  );
};

export default EvolutionDetail;
