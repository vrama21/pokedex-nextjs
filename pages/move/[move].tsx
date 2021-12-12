import { getMove } from 'api';
import Layout from 'components/Layout/Layout';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contextParams = context.params as { move: string };

  const { move: moveName } = contextParams;

  const move = await getMove(moveName);
  console.log(move)

  return {
    props: {
      move,
    },
  };
};

const Move: React.FC = ({ move }) => {
  return (
    <Layout>
      <p>{move.accuracy}</p>
      <p>{move.name}</p>
      <p>{move.power}</p>
      <p>{move.pp}</p>
    </Layout>
  );
};

export default Move;
