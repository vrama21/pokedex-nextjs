import { startCase } from 'lodash';
import Link from 'next/link';

export default function Evolution({ evolutionName, evolutionSprite }) {
  return (
    <div key={evolutionName} className="text-center">
      <img className="mx-auto" src={evolutionSprite} alt={evolutionName} />
      <Link href={{ pathname: `/pokemon/${evolutionName}` }} className="text-center">
        <a>{startCase(evolutionName)}</a>
      </Link>
    </div>
  );
}
