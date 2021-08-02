import Layout from 'components/Layout/Layout';
import PokedexData from 'components/PokedexData/PokedexData';
import Moves from 'components/Moves/Moves';
import Stats from 'components/Stats/Stats';
import Evolutions from 'components/Evolutions/Evolutions';
import getPokemon from 'api/getPokemon';
import PokemonList from 'data/pokemonList.json';

export const getStaticPaths = async () => {
  const paths = PokemonList.slice(0, 151).map((pokemon) => {
    return {
      params: { pokemonName: pokemon.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { pokemonName } = context.params;
  const pokemonDataResponse = await getPokemon(pokemonName);

  return {
    props: {
      pokemon: pokemonDataResponse,
    },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Layout>
        <div>
          <div className="flex justify-evenly">
            <img className="w-1/2 px-4 py-2" src={pokemon.image} alt="logo" />
            <div className="flex flex-wrap w-1/2">
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
      <Moves moves={pokemon.moves} />
    </>
  );
};

export default Pokemon;
