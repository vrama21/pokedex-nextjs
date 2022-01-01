import { LevelUpMovesTable } from 'components';
import { Container } from 'layouts';
import { PokemonMove } from 'types';

interface MovesProps {
  moves: PokemonMove[];
}

const Moves = ({ moves }: MovesProps) => {
  const levelUpMoves = moves.filter((move) => move.method === 'level-up');
  const machineMoves = moves.filter((move) => move.method === 'machine');
  const eggMoves = moves.filter((move) => move.method === 'egg');
  const tutorMoves = moves.filter((move) => move.method === 'tutor');

  return (
    <Container className="mx-2 mt-8">
      <h2 className="text-center font-bold">Moves</h2>
      <div className="flex">
        <div className="w-1/2">
          {levelUpMoves.length > 0 && <LevelUpMovesTable moves={levelUpMoves} moveType="Level Up" />}
          {/* {eggMoves.length > 0 && <MovesTable moves={eggMoves} moveType="Breeding" />} */}
        </div>
        <div className="w-1/2">
          {/* {machineMoves.length > 0 && <MovesTable moves={machineMoves} moveType="TM/HM" />}
          {tutorMoves.length > 0 && <MovesTable moves={tutorMoves} moveType="Tutor" />} */}
        </div>
      </div>
    </Container>
  );
};

export default Moves;
