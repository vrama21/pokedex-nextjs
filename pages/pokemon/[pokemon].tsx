import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Container, PageLayout } from 'layouts';
import { Evolutions, PokedexData, Moves, Stats } from 'components';
import { getPokemonData } from 'api';
import { PokemonResponse } from 'types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokemon } = context.params as unknown as { [key: string]: string };

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
    <div>
      <div className="flex justify-evenly">
        <Container className="w-1/2 mr-2 px-4 py-2 m-auto">
          <Image className="w-full" src={pokemon.image} alt="logo" width={1024} height={1024} />
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
      <Evolutions evolutions={pokemon.evolutions} />
      <Moves moves={pokemon.moves} />
    </div>
  );
};

Pokemon.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Pokemon;
