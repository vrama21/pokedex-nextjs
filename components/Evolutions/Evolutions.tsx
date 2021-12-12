import { Container, SectionLayout } from 'layouts';
import { Evolution, EvolutionDetail } from 'components';
import { PokemonEvolution } from 'types';
import { ReactElement } from 'react';

const Evolutions = ({ evolutions }: { evolutions: PokemonEvolution[] }) => {
  const hasEvolutions = evolutions.length > 1;

  const renderEvolutions =
    hasEvolutions &&
    evolutions.map((evolution) => {
      const { requirements, name } = evolution;

      return (
        <div className="flex justify-between" key={name}>
          {requirements.length > 0 && requirements.map((requirement, index) => <EvolutionDetail key={index} requirement={requirement} />)}
          <Evolution evolutionName={evolution.name} evolutionSprite={evolution.sprite} />
        </div>
      );
    });

  return (
    <Container className="mx-2 mt-8">
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-center mx-auto">
        {hasEvolutions && renderEvolutions}
        {!hasEvolutions && <p>There are no evolutions for this Pokemon</p>}
      </div>
    </Container>
  );
};

export default Evolutions;
