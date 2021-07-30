import KnownMoveTypeDetail from '../KnownMoveTypeDetail/KnownMoveTypeDetail';
import LevelUpDetail from '../LevelUpDetail/LevelUpDetail';
import LocationDetail from '../LocationDetail/LocationDetail';
import TimeOfDayDetail from '../TimeOfDayDetail/TimeOfDayDetail';
import UseItemDetail from '../UseItemDetail/UseItemDetail';

const EvolutionDetail = ({ evolutionDetail }) => {
  const { trigger, requirements } = evolutionDetail;

  const minLevelRequirement = trigger === 'level-up' && requirements.find((requirement) => requirement.min_level);
  const timeOfDayRequirement = trigger === 'level-up' && requirements.find((requirement) => requirement.time_of_day);
  const knownMoveTypeRequirement = trigger === 'level-up' && requirements.find((requirement) => requirement.known_move_type);
  const locationRequirement = trigger === 'level-up' && requirements.find((requirement) => requirement.location);
  const useItemRequirement = trigger === 'use-item' && requirements.find((requirement) => requirement.item);

  return (
    <>
      {minLevelRequirement && <LevelUpDetail minLevel={minLevelRequirement.min_level} />}
      {timeOfDayRequirement && <TimeOfDayDetail timeOfDay={timeOfDayRequirement.time_of_day} />}
      {knownMoveTypeRequirement && <KnownMoveTypeDetail knownMoveType={knownMoveTypeRequirement.known_move_type.name} />}
      {locationRequirement && <LocationDetail location={locationRequirement.location.name} />}
      {useItemRequirement && <UseItemDetail item={useItemRequirement.item.name} />}
    </>
  );
};

export default EvolutionDetail;
