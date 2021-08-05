import Layout from 'components/Layout/Layout';
import { gql } from '@apollo/client';
import client from 'apollo-client';
import { listAllMoves } from 'graphql/queries';

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql(listAllMoves)
  });

  const moves = data.pokemon_v2_move
  const paths = moves.map((move) => {
    return {
      params: { move: move.name }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { move } = context.params;

  return {
    props: {
      move,
    }
  }
}

const Move = ({ move }) => {
  return (
    <Layout>
      <p>{move}</p>
    </Layout>
  )
}

export default Move;
