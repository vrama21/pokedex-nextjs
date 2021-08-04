import { useRouter } from 'next/router';
import Layout from 'components/Layout/Layout';
import PokedexData from 'components/PokedexData/PokedexData';
import Moves from 'components/Moves/Moves';
import Stats from 'components/Stats/Stats';
import Evolutions from 'components/Evolutions/Evolutions';
import getPokemon from 'api/getPokemon';
import PokemonList from 'data/pokemonList.json';
import Container from 'components/Container/Container';

export const getStaticPaths = async () => {
  const paths = PokemonList.map((pokemon) => {
    return {
      params: { pokemonName: pokemon.name.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { pokemonName } = context.params;

  try {
    const pokemonDataResponse = await getPokemon(pokemonName);

    return {
      props: {
        pokemon: pokemonDataResponse,
      },
    };
  } catch (err) {
    console.error(err);
  }

  return {};
};

const Pokemon = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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
      {/* <Evolutions evolutions={pokemon.evolutions} evolutionChain /> */}
      <Moves moves={pokemon.moves} machines={pokemon.machines} />
    </>
  );
};

export default Pokemon;
