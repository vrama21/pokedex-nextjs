import { GetServerSideProps } from 'next';
import { PageLayout, SectionLayout } from 'layouts';
import { EvolutionChain, Moves } from 'components';
import { EvolutionsSection, PokemonSection } from 'components/Sections';
import { getPokemonData } from 'pokeapi/getPokemonData';
import { PokemonResponse } from 'types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokemon } = context.params as { pokemon: string };

  const pokemonData = await getPokemonData(pokemon);

  return {
    props: {
      pokemon: pokemonData,
    },
  };
};

interface PokemonProps {
  pokemon: PokemonResponse;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  if (!pokemon) {
    return <p className="text-center">There is no data for this Pokemon</p>;
  }

  return (
    <PageLayout>
      <PokemonSection pokemon={pokemon} />
      <EvolutionsSection evolutions={pokemon.evolutions} />
      <SectionLayout backgroundColor="#2A384B">
        <Moves moves={pokemon.moves} />
      </SectionLayout>
    </PageLayout>
  );
};

export default Pokemon;
