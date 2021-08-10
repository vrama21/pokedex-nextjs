import HappinessDetail from '../HappinessDetail/HappinessDetail';
import KnownMoveTypeDetail from '../KnownMoveTypeDetail/KnownMoveTypeDetail';
import LevelUpDetail from '../LevelUpDetail/LevelUpDetail';
import LocationDetail from '../LocationDetail/LocationDetail';
import TimeOfDayDetail from '../TimeOfDayDetail/TimeOfDayDetail';
import UseItemDetail from '../UseItemDetail/UseItemDetail';
import TradeDetail from '../TradeDetail/TradeDetail';
import BeautyDetail from './BeautyDetail/BeautyDetail';

const EvolutionDetail = ({ requirement }) => {
  const { heldItem, item, knownMoveType, minBeauty, minHappiness, minLevel, location, timeOfDay, trigger } = requirement;

  const minLevelRequirement = trigger === 'level-up' && minLevel;
  const timeOfDayRequirement = trigger === 'level-up' && timeOfDay;
  const happinessRequirement = trigger === 'level-up' && minHappiness;
  const knownMoveTypeRequirement = trigger === 'level-up' && knownMoveType;
  const beautyRequirement = trigger === 'level-up' && minBeauty;
  const locationRequirement = trigger === 'level-up' && location;
  const useItemRequirement = trigger === 'use-item' && item;
  const tradeRequirement = trigger === 'trade';

  return (
    <>
      {minLevelRequirement && <LevelUpDetail minLevel={minLevel} />}
      {timeOfDayRequirement && <TimeOfDayDetail timeOfDay={timeOfDay} />}
      {happinessRequirement && <HappinessDetail minHappiness={minHappiness} />}
      {knownMoveTypeRequirement && <KnownMoveTypeDetail knownMoveType={knownMoveType} />}
      {beautyRequirement && <BeautyDetail minBeauty={minBeauty} />}
      {locationRequirement && <LocationDetail location={location} />}
      {useItemRequirement && <UseItemDetail item={item} />}
      {tradeRequirement && <TradeDetail heldItem={heldItem} />}
    </>
  );
};

export default EvolutionDetail;
