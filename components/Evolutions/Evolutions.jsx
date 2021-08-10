import Layout from '../Layout/Layout';
import Evolution from '../Evolution/Evolution';
import EvolutionDetail from '../EvolutionDetails/EvolutionDetails';
import RightArrow from '../../assets/right-arrow.svg';

const Evolutions = ({ evolutions }) => {
  console.log(evolutions);
  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-center mx-auto">
        {evolutions.length > 0
          ? evolutions.map((evolution) => {
              const { requirements, name } = evolution;

              return (
                <div className="flex justify-between" key={name}>
                  {requirements.length > 0 && (
                    <div className="min-w-max my-auto">
                      <RightArrow className="h-12 mx-auto" />
                      {requirements.map((requirement) => (
                        <EvolutionDetail key={requirement} requirement={requirement} />
                      ))}
                    </div>
                  )}
                  <Evolution evolutionName={evolution.name} evolutionSprite={evolution.sprite} />
                </div>
              );
            })
          : 'There are no evolutions for this Pokemon'}
      </div>
    </Layout>
  );
};

export default Evolutions;
