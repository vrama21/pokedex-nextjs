import Layout from '../Layout/Layout';
import LevelUpMoves from './LevelUpMoves/LevelUpMoves';
import MachineMoves from './MachineMoves.jsx/MachineMoves';
import EggMoves from './EggMoves/EggMoves';
import TutorMoves from './TutorMoves/TutorMoves';

const Moves = ({ moves, machines }) => {
  const levelUpMoves = moves.filter((move) => move.method === 'level-up');
  const machineMoves = moves.filter((move) => move.method === 'machine');
  const eggMoves = moves.filter((move) => move.method === 'egg');
  const tutorMoves = moves.filter((move) => move.method === 'tutor');

  

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2">
          {levelUpMoves.length > 0 && <LevelUpMoves moves={levelUpMoves} />}
          {eggMoves.length > 0 && <EggMoves moves={eggMoves} />}
        </div>
        <div className="w-1/2">
          {machines.length > 0 && <MachineMoves machines={machines} moves={machineMoves} />}
          {tutorMoves.length > 0 && <TutorMoves moves={tutorMoves} />}
        </div>
      </div>
    </Layout>
  );
};

export default Moves;
