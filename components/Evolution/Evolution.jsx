import { startCase } from 'lodash';

export default function Evolution({ evolutionName, evolutionSprite }) {
  return (
    <div key={evolutionName}>
      <img className="mx-auto" src={evolutionSprite} alt={evolutionName} />
      <p className="text-center">{startCase(evolutionName)}</p>
    </div>
  );
}
