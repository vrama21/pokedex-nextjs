import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { getMove } from 'api/getMove';
import { PageLayout } from 'layouts';
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

const Move = ({ move }: MoveProps) => {
  return (
    <div>
      <p>{move.accuracy}</p>
      <p>{move.name}</p>
      <p>{move.power}</p>
      <p>{move.pp}</p>
    </div>
  );
};

Move.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Move;
