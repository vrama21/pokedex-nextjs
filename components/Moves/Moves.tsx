import { MovesTable } from 'components';
import { Layout } from 'layouts';
import { PokemonMove } from 'types';

interface MovesProps {
  moves: PokemonMove[];
}

const Moves: React.FC<MovesProps> = ({ moves }) => {
  const levelUpMoves = moves.filter((move) => move.method === 'level-up');
  const machineMoves = moves.filter((move) => move.method === 'machine');
  const eggMoves = moves.filter((move) => move.method === 'egg');
  const tutorMoves = moves.filter((move) => move.method === 'tutor');

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2">
          {levelUpMoves.length > 0 && <MovesTable moves={levelUpMoves} />}
          {eggMoves.length > 0 && <MovesTable moves={eggMoves} />}
        </div>
        <div className="w-1/2">
          {machineMoves.length > 0 && <MovesTable moves={machineMoves} />}
          {tutorMoves.length > 0 && <MovesTable moves={tutorMoves} />}
        </div>
      </div>
    </Layout>
  );
};

export default Moves;
