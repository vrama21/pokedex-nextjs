import { startCase } from 'lodash';
import Layout from '../Layout/layout';

const Moves = ({ moves }) => {
  const renderMoves = (method) =>
    moves
      .filter((move) => move.method === method)
      .map((move) => {
        const moveName = startCase(move.name).replace('-', ' ');
        const levelLearnedAt = move.learnedAt === 0 ? 1 : move.learnedAt;

        return (
          <div className="flex justify-between px-2" key={moveName}>
            <p className="font-bold text-sm">{moveName}</p>
            {move.method !== 'egg' && <p className="text-sm">{levelLearnedAt}</p>}
          </div>
        );
      });

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
          <h3 className="font-bold text-center">Moves learned by Level Up</h3>
          <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
            <p>Name</p>
            <p>Level</p>
          </div>
          {renderMoves('level-up')}
        </div>
        <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
          <h3 className="font-bold text-center">Moves learned by Breeding</h3>
          <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
            <p>Name</p>
          </div>
          {renderMoves('egg')}
        </div>
        <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
          <h3 className="font-bold text-center">Moves learned by TMs</h3>
          <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
            <p>Name</p>
            <p>Level</p>
          </div>
          {renderMoves('machine')}
        </div>
        <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
          <h3 className="font-bold text-center">Moves learned by Tutor</h3>
          <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
            <p>Name</p>
            <p>Level</p>
          </div>
          {renderMoves('tutor')}
        </div>
      </div>
    </Layout>
  );
};

export default Moves;
