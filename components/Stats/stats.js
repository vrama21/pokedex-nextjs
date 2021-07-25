import styles from './stats.module.scss';

const Stats = ({ stats }) => {
  const calculateMaxHp = stats.hp * 2 + 204;
  const calculateMaxStat = (baseStat) => (baseStat * 2 + 99) * 1.1;

  const maxHp = 255;
  const maxAttack = 180;
  const maxDefense = 230;
  const maxSpecialAttack = 194;
  const maxSpecialDefense = 230;
  const maxSpeed = 180;

  const hpBarPercentage = (stats.hp / maxHp).toFixed(2) * 100;
  const attackBarPercentage = (stats.attack / maxAttack).toFixed(2) * 100;
  const defenseBarPercentage = (stats.defense / maxDefense).toFixed(2) * 100;
  const specialAttackBarPercentage = (stats.specialAttack / maxSpecialAttack).toFixed(2) * 100;
  const specialDefenseBarPercentage = (stats.specialDefense / maxSpecialDefense).toFixed(2) * 100;
  const speedBarPercentage = (stats.speed / maxSpeed).toFixed(2) * 100;

  const getStatPercentageColor = (statPercentage) => {
    if (statPercentage > 90) return styles.statBar6;
    if (statPercentage < 90 && statPercentage > 70) return styles.statBar5;
    if (statPercentage < 70 && statPercentage > 50) return styles.statBar4;
    if (statPercentage < 50 && statPercentage > 30) return styles.statBar3;
    if (statPercentage < 30 && statPercentage > 10) return styles.statBar2;
    else return styles.statBar1;
  };

  return (
    <div>
      <h2 className="font-bold text-center">Stats</h2>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>HP</p>
        <p className={styles.baseStat}>{stats.hp}</p>
        <div className="flex w-2/3">
          <div className={`${styles.statBar} ${getStatPercentageColor(hpBarPercentage)}`} style={{ width: `${hpBarPercentage}%` }} />
        </div>
        <p className={styles.maxStat}>{maxHp}</p>
      </div>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>Attack</p>
        <p className={styles.baseStat}>{stats.attack}</p>
        <div className="flex w-2/3">
          <div className={`${styles.statBar} ${getStatPercentageColor(attackBarPercentage)}`} style={{ width: `${attackBarPercentage}%` }} />
        </div>
        <p className={styles.maxStat}>{maxAttack}</p>
      </div>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>Defense</p>
        <p className={styles.baseStat}>{stats.defense}</p>
        <div className="flex w-2/3">
          <div className={`${styles.statBar} ${getStatPercentageColor(defenseBarPercentage)}`} style={{ width: `${defenseBarPercentage}%` }} />
        </div>
        <p className={styles.maxStat}>{maxDefense}</p>
      </div>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>Special Attack</p>
        <p className={styles.baseStat}>{stats.specialAttack}</p>
        <div className="flex w-2/3">
          <div
            className={`${styles.statBar} ${getStatPercentageColor(specialAttackBarPercentage)}`}
            style={{ width: `${specialAttackBarPercentage}%` }}
          />
        </div>
        <p className={styles.maxStat}>{maxSpecialAttack}</p>
      </div>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>Special Defense</p>
        <p className={styles.baseStat}>{stats.specialDefense}</p>
        <div className="flex w-2/3">
          <div
            className={`${styles.statBar} ${getStatPercentageColor(specialDefenseBarPercentage)}`}
            style={{ width: `${specialDefenseBarPercentage}%` }}
          />
        </div>
        <p className={styles.maxStat}>{maxSpecialDefense}</p>
      </div>
      <div className={styles.statBarContainer}>
        <p className={styles.statName}>Speed</p>
        <p className={styles.baseStat}>{stats.speed}</p>
        <div className="flex w-2/3">
          <div className={`${styles.statBar} ${getStatPercentageColor(speedBarPercentage)}`} style={{ width: `${speedBarPercentage}%` }} />
        </div>
        <p className={styles.maxStat}>{maxSpeed}</p>
      </div>
    </div>
  );
};

export default Stats;
