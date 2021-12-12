import Layout from '../Layout/Layout';
import { Machine } from 'pokedex-promise-v2';
import { PokemonMove } from 'types';
import MovesTable from 'components/MovesTable/MovesTable';

interface MovesProps {
  moves: PokemonMove[];
  machines: Machine[];
}

const Moves: React.FC<MovesProps> = ({ moves, machines }) => {
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
          {machines.length > 0 && <MovesTable machines={machines} moves={machineMoves} />}
          {tutorMoves.length > 0 && <MovesTable moves={tutorMoves} />}
        </div>
      </div>
    </Layout>
  );
};

export default Moves;
