import { StatBar } from 'components';
import { PokemonStats } from 'types';
import styles from './Stats.module.scss';

interface StatsProps {
  stats: PokemonStats;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const calculateMaxHp = Math.round(stats.hp * 2 + 204);
  const calculateMaxStat = (baseStat: number) => Math.round((baseStat * 2 + 99) * 1.1);

  const baseHpMax = 255;
  const baseAttackMax = 180;
  const baseDefenseMax = 230;
  const baseSpecialAttackMax = 194;
  const baseSpecialDefenseMax = 230;
  const baseSpeedMax = 180;

  const hpPercentage = (stats.hp / baseHpMax) * 100;
  const attackPercentage = (stats.attack / baseAttackMax) * 100;
  const defensePercentage = (stats.defense / baseDefenseMax) * 100;
  const specialAttackPercentage = (stats.specialAttack / baseSpecialAttackMax) * 100;
  const specialDefensePercentage = (stats.specialDefense / baseSpecialDefenseMax) * 100;
  const speedPercentage = (stats.speed / baseSpeedMax) * 100;

  return (
    <div className={styles.container}>
      <h2 className="text-center mb-4">Stats</h2>
      <StatBar baseStat={stats.hp} baseStatMaxValue={calculateMaxHp} statName="HP" statPercentage={hpPercentage} />
      <StatBar baseStat={stats.attack} baseStatMaxValue={calculateMaxStat(stats.attack)} statName="Attack" statPercentage={attackPercentage} />
      <StatBar baseStat={stats.defense} baseStatMaxValue={calculateMaxStat(stats.defense)} statName="Defense" statPercentage={defensePercentage} />
      <StatBar
        baseStat={stats.specialAttack}
        baseStatMaxValue={calculateMaxStat(stats.specialAttack)}
        statName="Sp. Attack"
        statPercentage={specialAttackPercentage}
      />
      <StatBar
        baseStat={stats.specialDefense}
        baseStatMaxValue={calculateMaxStat(stats.specialDefense)}
        statName="Sp. Defense"
        statPercentage={specialDefensePercentage}
      />
      <StatBar baseStat={stats.speed} baseStatMaxValue={calculateMaxStat(stats.speed)} statName="Speed" statPercentage={speedPercentage} />
    </div>
  );
};

export default Stats;
