import { Statbar } from 'components';
import { Container } from 'layouts';
import { PokemonStats } from 'types';

const Stats = ({ stats }: { stats: PokemonStats }) => {
  // const calculateMaxHp = stats.hp * 2 + 204;
  // const calculateMaxStat = (baseStat) => (baseStat * 2 + 99) * 1.1;

  const baseHpMax = 255;
  const baseAttackMax = 180;
  const baseDefenseMax = 230;
  const baseSpecialAttackMax = 194;
  const baseSpecialDefenseMax = 230;
  const baseSpeedMax = 180;

  const hpPercentage = ((stats.hp / baseHpMax) * 100);
  const attackPercentage = ((stats.attack / baseAttackMax) * 100);
  const defensePercentage = ((stats.defense / baseDefenseMax) * 100);
  const specialAttackPercentage = ((stats.specialAttack / baseSpecialAttackMax) * 100);
  const specialDefensePercentage = ((stats.specialDefense / baseSpecialDefenseMax) * 100);
  const speedPercentage = ((stats.speed / baseSpeedMax) * 100);

  return (
    <Container>
      <h2 className="font-bold text-center">Stats</h2>
      <Statbar baseStat={stats.hp} baseStatMaxValue={baseHpMax} statName="HP" statPercentage={hpPercentage} />
      <Statbar baseStat={stats.attack} baseStatMaxValue={baseAttackMax} statName="Attack" statPercentage={attackPercentage} />
      <Statbar baseStat={stats.defense} baseStatMaxValue={baseDefenseMax} statName="Defense" statPercentage={defensePercentage} />
      <Statbar
        baseStat={stats.specialAttack}
        baseStatMaxValue={baseSpecialAttackMax}
        statName="Sp. Attack"
        statPercentage={specialAttackPercentage}
      />
      <Statbar
        baseStat={stats.specialDefense}
        baseStatMaxValue={baseSpecialDefenseMax}
        statName="Sp. Defense"
        statPercentage={specialDefensePercentage}
      />
      <Statbar baseStat={stats.speed} baseStatMaxValue={baseSpeedMax} statName="Speed" statPercentage={speedPercentage} />
    </Container>
  );
};

export default Stats;
