import Layout from '../Layout/layout';
import { capitalize } from 'lodash';

const Evolutions = ({ evolutions }) => {
  return (
    <Layout>
      <h2 className="text-center font-bold">Evolutions</h2>
      <div className="flex justify-evenly">
        {evolutions.map((evolution) => (
          <div key={evolution.name}>
            <img src={evolution.sprite} />
            <p className="text-center">{capitalize(evolution.name)}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
};

module.exports = Evolutions;