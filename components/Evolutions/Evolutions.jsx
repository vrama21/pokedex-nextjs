import Layout from '../Layout/layout';
import Evolution from '../Evolution/Evolution';
import EvolutionDetail from '../EvolutionDetails/EvolutionDetails';

const Evolutions = ({ evolutions }) => {
  const evolutionsRender = evolutions.map((evolution) => {
    const { evolutionDetails } = evolution;

    return (
      <>
        {evolutionDetails.length > 0 && (
          <div className="min-w-max my-auto">
            {evolutionDetails.map((evolutionDetail) => (
              <EvolutionDetail key={evolutionDetail} evolutionDetail={evolutionDetail} />
            ))}
          </div>
        )}
        <div>
          <Evolution evolutionName={evolution.name} evolutionSprite={evolution.sprite} />
        </div>
      </>
    );
  });

  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex max-w-lg justify-evenly mx-auto ">
        {evolutions.length > 0 ? evolutionsRender : 'There are no evolutions for this Pokemon'}
      </div>
    </Layout>
  );
};

export default Evolutions;
