import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Container, PageLayout } from 'layouts';
import { Evolutions, PokedexData, Moves, Stats } from 'components';
import { getPokemonData } from 'api/getPokemonData';
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
      <div className="flex justify-evenly m-2">
        <Container className="w-1/2 mr-2 m-auto">
          <Image className="w-full" src={pokemon.image} alt="logo" width={525} height={525} priority={true} />
        </Container>
        <div className="flex flex-col justify-between w-1/2">
          <PokedexData pokemon={pokemon} />
          <Stats stats={pokemon.stats} />
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
