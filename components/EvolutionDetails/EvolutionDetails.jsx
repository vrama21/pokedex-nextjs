import HappinessDetail from '../HappinessDetail/HappinessDetail';
import KnownMoveTypeDetail from '../KnownMoveTypeDetail/KnownMoveTypeDetail';
import LevelUpDetail from '../LevelUpDetail/LevelUpDetail';
import LocationDetail from '../LocationDetail/LocationDetail';
import TimeOfDayDetail from '../TimeOfDayDetail/TimeOfDayDetail';
import UseItemDetail from '../UseItemDetail/UseItemDetail';
import TradeDetail from '../TradeDetail/TradeDetail';

const EvolutionDetail = ({ requirement }) => {
  const { heldItem, item, minAffection, minBeauty, minHappiness, minLevel, trigger } = requirement;

  const minLevelRequirement = trigger === 'level-up' && minLevel;
  const timeOfDayRequirement = trigger === 'level-up' && requirement.time_of_day;
  const happinessRequirement = trigger === 'level-up' && minHappiness;
  const knownMoveTypeRequirement = trigger === 'level-up' && requirement.known_move_type;
  const locationRequirement = trigger === 'level-up' && requirement.location;
  const useItemRequirement = trigger === 'use-item' && item;
  const tradeRequirement = trigger === 'trade';

  return (
    <>
      {minLevelRequirement && <LevelUpDetail minLevel={minLevel} />}
      {timeOfDayRequirement && <TimeOfDayDetail timeOfDay={timeOfDayRequirement.time_of_day} />}
      {happinessRequirement && <HappinessDetail minHappiness={minHappiness} />}
      {knownMoveTypeRequirement && <KnownMoveTypeDetail knownMoveType={knownMoveTypeRequirement.known_move_type.name} />}
      {locationRequirement && <LocationDetail location={locationRequirement.location.name} />}
      {useItemRequirement && <UseItemDetail item={item} />}
      {tradeRequirement && <TradeDetail heldItem={heldItem} />}
    </>
  );
};

export default EvolutionDetail;
