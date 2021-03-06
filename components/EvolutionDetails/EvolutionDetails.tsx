import { PokemonTypeRequirement } from 'types';
import { capitalize, startCase } from 'lodash';
import RightArrow from '../RightArrow/RightArrow';

interface EvolutionDetailProps {
  requirement: PokemonTypeRequirement;
}

const EvolutionDetail: React.FC<EvolutionDetailProps> = ({ requirement }) => {
  const evolutionDetailValue = () => {
    switch (requirement.trigger) {
      case 'level-up':
        if (requirement.minLevel) {
          return `Lv ${requirement.minLevel}`;
        }

        if (requirement.timeOfDay) {
          return `Lv at ${capitalize(requirement.timeOfDay)}`;
        }

        if (requirement.minHappiness) {
          return `${requirement.minHappiness} Happiness`;
        }

        if (requirement.knownMove) {
          return `Lv knowning ${startCase(requirement.knownMove)}`;
        }

        if (requirement.minBeauty) {
          return `Lv with min beauty of ${requirement.minBeauty}`;
        }

        if (requirement.location) {
          return `Lv at ${startCase(requirement.location.replace('-', ' '))}`;
        }

      case 'trade':
        return requirement.heldItem ? `Trade w/ ${startCase(requirement.heldItem)}` : 'Trade';

      case 'use-item':
        return startCase(requirement.item.replace('-', ' '));

      default:
        return 'Missing';
    }
  };

  return (
    <div className="min-w-max my-auto">
      <RightArrow color={'orange'} />
      <div className="text-xs text-center" style={{ height: '40px' }}>
        <span>{evolutionDetailValue()}</span>
      </div>
    </div>
  );
};

export default EvolutionDetail;
