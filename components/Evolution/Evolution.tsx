import { startCase } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

interface EvolutionProps {
  evolutionName: string;
  evolutionSprite: string;
}

const Evolution: React.FC<EvolutionProps> = ({ evolutionName, evolutionSprite }) => {
  return (
    <div className="text-center w-32">
      <Image className="mx-auto" src={evolutionSprite} alt={evolutionName} width={1024} height={1024} />
      <Link href={{ pathname: `${evolutionName}` }} scroll={false}>
        <a>{startCase(evolutionName)}</a>
      </Link>
    </div>
  );
};

export default Evolution;
