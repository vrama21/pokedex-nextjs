import { GetServerSideProps } from 'next';
import { getMove } from 'pokeapi/getMove';
import { PokemonMove } from 'types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contextParams = context.params as { move: string };

  const { move: moveName } = contextParams;

  const move = await getMove(moveName);

  return {
    props: {
      move,
    },
  };
};

interface MoveProps {
  move: PokemonMove;
}

const Move: React.FC<MoveProps> = ({ move }) => {
  return (
    <div>
      <p>{move.accuracy}</p>
      <p>{move.name}</p>
      <p>{move.power}</p>
      <p>{move.pp}</p>
    </div>
  );
};

export default Move;
