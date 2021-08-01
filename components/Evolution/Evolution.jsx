import { startCase } from 'lodash';
import Link from 'next/link';

const Evolution = ({ evolutionName, evolutionSprite }) => {
  return (
    <div className="text-center w-32">
      <img className="mx-auto" src={evolutionSprite} alt={evolutionName} />
      <Link href={{ pathname: `${evolutionName}` }} className="text-center" scroll={false}>
        <a>{startCase(evolutionName)}</a>
      </Link>
    </div>
  );
};

export default Evolution;
