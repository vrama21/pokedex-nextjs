import { startCase } from 'lodash';
import Link from 'next/link';

interface EvolutionProps {
  evolutionName: string;
  evolutionSprite: string;
}

const Evolution = ({ evolutionName, evolutionSprite }: EvolutionProps) => {
  return (
    <div className="text-center w-32">
      <img className="mx-auto" src={evolutionSprite} alt={evolutionName} />
      <Link href={{ pathname: `${evolutionName}` }} scroll={false}>
        <a>{startCase(evolutionName)}</a>
      </Link>
    </div>
  );
};

export default Evolution;
