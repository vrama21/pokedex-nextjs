import { startCase, upperCase } from 'lodash';
import Layout from '../Layout/Layout';
import Type from '../Type/Type';
import LevelUpMoves from './LevelUpMoves/LevelUpMoves';

const Moves = ({ moves, machines }) => {
  const getMovesByMethod = (method) =>
    moves
      .filter((move) => move.method === method)
      .map((move) => {
        return (
          <div className="flex justify-between px-2 py-1" key={move.name}>
            <p className="font-bold text-sm w-full my-auto">{startCase(move.name).replace('-', ' ')}</p>
            <Type type={move.type} />
            {(move.method === 'level-up' || move.method === 'tutor') && (
              <p className="text-sm text-right w-1/12 my-auto">{move.learnedAt === 0 ? 1 : move.learnedAt}</p>
            )}
          </div>
        );
      });

  const machineMoves = machines.map((machine) => (
    <div className="flex justify-between px-2" key={machine.move.name}>
      <p className="font-bold text-sm">{startCase(machine.move.name).replace('-', ' ')}</p>
      <p className="text-sm">{upperCase(machine.item.name).replace('-', ' ')}</p>
    </div>
  ));

  const levelUpMoves = moves.filter((move) => move.method === 'level-up');
  const eggMoves = getMovesByMethod('egg');
  const tutorMoves = getMovesByMethod('tutor');

  return (
    <Layout>
      <div className="flex justify-center">
        {levelUpMoves.length > 0 && (
          <div className="w-1/3">
            <LevelUpMoves levelUpMoves={levelUpMoves} />
          </div>
        )}
        {eggMoves.length > 0 && (
          <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
            <h3 className="font-bold text-center">Moves learned by Breeding</h3>
            <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
              <p>Name</p>
            </div>
            {eggMoves}
          </div>
        )}
        {machineMoves.length > 0 && (
          <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
            <h3 className="font-bold text-center">Moves learned by TMs</h3>
            <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
              <p>Name</p>
              <p>Level</p>
            </div>
            {machineMoves}
          </div>
        )}
        {tutorMoves.length > 0 && (
          <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
            <h3 className="font-bold text-center">Moves learned by Tutor</h3>
            <div className="flex justify-between px-2 font-bold border-gray-300 border-b-2 my-2">
              <p>Name</p>
              <p>Level</p>
            </div>
            {tutorMoves}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Moves;
