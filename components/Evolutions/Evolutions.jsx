import Layout from '../Layout/Layout';
import Evolution from '../Evolution/Evolution';
import EvolutionDetail from '../EvolutionDetails/EvolutionDetails';

const Evolutions = ({ evolutions }) => {
  const hasEvolutions = evolutions.length > 1;

  const renderEvolutions =
    hasEvolutions &&
    evolutions.map((evolution) => {
      const { requirements, name } = evolution;

      return (
        <div className="flex justify-between" key={name}>
          {requirements.length > 0 && requirements.map((requirement) => <EvolutionDetail key={requirement} requirement={requirement} />)}
          <Evolution evolutionName={evolution.name} evolutionSprite={evolution.sprite} />
        </div>
      );
    });

  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-center mx-auto">
        {hasEvolutions && renderEvolutions}
        {!hasEvolutions && <p>There are no evolutions for this Pokemon</p>}
      </div>
    </Layout>
  );
};

export default Evolutions;
