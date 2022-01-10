import { Evolution, EvolutionDetail } from 'components';
import { SectionLayout } from 'layouts';
import { PokemonEvolution } from 'types';

interface EvolutionsSectionProps {
  evolutions: PokemonEvolution[];
}

const EvolutionsSection: React.FC<EvolutionsSectionProps> = ({ evolutions }) => {
  const renderEvolutions = evolutions.map((evolution) => {
    const { requirements, name } = evolution;

    return (
      <div className="flex justify-between" key={name}>
        {requirements.length > 0 && requirements.map((requirement, index) => <EvolutionDetail key={index} requirement={requirement} />)}
        <Evolution evolutionName={evolution.name} evolutionSprite={evolution.sprite} />
      </div>
    );
  });

  return (
    <SectionLayout backgroundColor="#1B2330">
      <div>
        <h2 className="text-center font-bold">Evolutions</h2>
        <div className="flex justify-center mx-auto">
          {evolutions.length > 1 && renderEvolutions}
          {evolutions.length === 0 && <p>There are no evolutions for this Pokemon</p>}
        </div>
      </div>
    </SectionLayout>
  );
};

export default EvolutionsSection;
