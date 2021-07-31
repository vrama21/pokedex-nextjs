import Layout from '../../../components/Layout/layout';
import PokedexData from '../../../components/PokedexData/PokedexData';
import Moves from '../../../components/Moves/Moves';
import Stats from '../../../components/Stats/Stats';
import Evolutions from '../../../components/Evolutions/Evolutions';
import getPokemon from '../../../api/getPokemon';

export default function Pokemon({ pokemon }) {
  return (
    <>
      <Layout>
        <div>
          <div className="flex">
            <img className="w-1/2" src={pokemon.image} alt="logo" />
            <div className="flex flex-wrap w-1/2 px-4 py-2 border-gray-400">
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
}

export async function getServerSideProps(context) {
  const { pokemonName } = context.params;
  const pokemonDataResponse = await getPokemon(pokemonName);

  return {
    props: {
      pokemon: pokemonDataResponse,
    },
  };
}
