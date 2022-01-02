import { useState } from 'react';
import Image from 'next/image';
import { PokedexData, Stats } from 'components';
import { SectionLayout } from 'layouts';
import { PokemonResponse } from 'types';

interface PokemonSectionProps {
  pokemon: PokemonResponse;
}

const PokemonSection: React.FC<PokemonSectionProps> = ({ pokemon }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <SectionLayout backgroundColor="#2A384B">
      <div className="w-1/2 flex justify-center">
        <Image
          className={imageIsLoaded ? 'slide-in' : ''}
          src={pokemon.image}
          alt="Pokemon Image"
          width={525}
          height={525}
          onLoad={(event) => {
            const target = event.target as HTMLImageElement;

            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true);
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <PokedexData pokemon={pokemon} />
        <Stats stats={pokemon.stats} />
      </div>
    </SectionLayout>
  );
};

export default PokemonSection;
