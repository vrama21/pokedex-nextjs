import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { PageLayout, SectionLayout } from 'layouts';
import { EvolutionChain, PokedexData, Moves, Stats } from 'components';
import { getPokemonData } from 'api/getPokemonData';
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
      <SectionLayout backgroundColor="#2A384B">
        <div className="w-1/2">
          <Image src={pokemon.image} alt="logo" width={525} height={525} priority={true} />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <PokedexData pokemon={pokemon} />
          <Stats stats={pokemon.stats} />
        </div>
      </SectionLayout>
      <SectionLayout backgroundColor="#1B2330">
        <EvolutionChain evolutions={pokemon.evolutions} />
      </SectionLayout>
      <SectionLayout backgroundColor="#2A384B">
        <Moves moves={pokemon.moves} />
      </SectionLayout>
    </PageLayout>
  );
};

export default Pokemon;
