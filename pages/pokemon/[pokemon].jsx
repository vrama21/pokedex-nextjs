import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import client from 'apollo-client';
import { listAllPokemon } from 'graphql/queries';
import Layout from 'components/Layout/Layout';
import PokedexData from 'components/PokedexData/PokedexData';
import Moves from 'components/Moves/Moves';
import Stats from 'components/Stats/Stats';
import Evolutions from 'components/Evolutions/Evolutions';
import getPokemon from 'api/getPokemon';
import Container from 'components/Container/Container';

export const getStaticPaths = async () => {
  const { data: { pokemon_v2_pokemon: pokemons } } = await client.query({
    query: gql(listAllPokemon)
  })

  const paths = pokemons.map((pokemon) => {
    return {
      params: { pokemon: pokemon.name.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { pokemon } = context.params;

  try {
    const pokemonDataResponse = await getPokemon(pokemon);

    return {
      props: {
        pokemon: pokemonDataResponse,
      },
    };
  } catch (err) {
    console.error(`Error getting pokemon data for ${pokemon}...`);
  }

  return {
    props: {
      pokemon: null
    }
  };
};

const Pokemon = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <p className="text-center">There is no data for this Pokemon</p>;
  }

  return (
    <>
      <Layout>
        <div>
          <div className="flex justify-evenly">
            <Container className="w-1/2 mr-2 px-4 py-2 m-auto">
              <img className="w-full" src={pokemon.image} alt="logo" />
            </Container>
            <div className="flex flex-col justify-between w-1/2">
              <div className="w-full">
                <PokedexData pokemon={pokemon} />
              </div>
              <div className="w-full">
                <Stats stats={pokemon.stats} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Evolutions evolutions={pokemon.evolutions} evolutionChain />
      <Moves moves={pokemon.moves} machines={pokemon.machines} />
    </>
  );
};

export default Pokemon;
