import { gql } from '@apollo/client';
import client from 'apollo-client';
import { getMove, listAllMoves } from 'graphql/queries';
import Layout from 'components/Layout/Layout';

// export const getStaticPaths = async () => {
//   const {
//     data: { pokemon_v2_move: moves },
//   } = await client.query({
//     query: gql(listAllMoves),
//   });

//   const paths = moves.map((move) => {
//     return {
//       params: { move: move.name },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { move: moveName } = context.params;

//   const {
//     data: { pokemon_v2_move: moveData },
//   } = await client.query({
//     query: gql(getMove),
//   });

//   return {
//     props: {
//       move: moveData,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const { move: moveName } = context.params;

  const {
    data: { pokemon_v2_move: moveData },
  } = await client.query({
    query: gql(getMove),
  });

  return {
    props: {
      move: moveData,
    },
  };
};

const Move = ({ move }) => {
  console.log(move);
  return (
    <Layout>
      <p>{move}</p>
    </Layout>
  );
};

export default Move;
