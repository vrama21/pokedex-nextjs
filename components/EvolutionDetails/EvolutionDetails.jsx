import HappinessDetail from './HappinessDetail/HappinessDetail';
import KnownMoveDetail from './KnownMoveDetail/KnownMoveDetail';
import LevelUpDetail from './LevelUpDetail/LevelUpDetail';
import LocationDetail from './LocationDetail/LocationDetail';
import TimeOfDayDetail from './TimeOfDayDetail/TimeOfDayDetail';
import UseItemDetail from './UseItemDetail/UseItemDetail';
import TradeDetail from './TradeDetail/TradeDetail';
import BeautyDetail from './BeautyDetail/BeautyDetail';
import RightArrow from '../../assets/right-arrow.svg';

const EvolutionDetail = ({ requirement }) => {
  const { heldItem, item, knownMove, minBeauty, minHappiness, minLevel, location, timeOfDay, trigger } = requirement;

  const minLevelRequirement = trigger === 'level-up' && minLevel;
  const timeOfDayRequirement = trigger === 'level-up' && timeOfDay;
  const happinessRequirement = trigger === 'level-up' && minHappiness;
  const knownMoveRequirement = trigger === 'level-up' && knownMove;
  const beautyRequirement = trigger === 'level-up' && minBeauty;
  const locationRequirement = trigger === 'level-up' && location;
  const useItemRequirement = trigger === 'use-item' && item;
  const tradeRequirement = trigger === 'trade';

  return (
    <div className="min-w-max my-auto">
      <RightArrow className="h-12 mx-auto" />
      {minLevelRequirement && <LevelUpDetail minLevel={minLevel} />}
      {timeOfDayRequirement && <TimeOfDayDetail timeOfDay={timeOfDay} />}
      {happinessRequirement && <HappinessDetail minHappiness={minHappiness} />}
      {knownMoveRequirement && <KnownMoveDetail knownMove={knownMove} />}
      {beautyRequirement && <BeautyDetail minBeauty={minBeauty} />}
      {locationRequirement && <LocationDetail location={location} />}
      {useItemRequirement && <UseItemDetail item={item} />}
      {tradeRequirement && <TradeDetail heldItem={heldItem} />}
    </div>
  );
};

export default EvolutionDetail;
