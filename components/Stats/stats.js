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

  const hpBarWidth = (stats.hp / maxHp).toFixed(2) * 100;
  const attackBarWidth = (stats.attack / maxAttack).toFixed(2) * 100;
  const defenseBarWidth = (stats.defense / maxDefense).toFixed(2) * 100;
  const specialAttackBarWidth = (stats.specialAttack / maxSpecialAttack).toFixed(2) * 100;
  const specialDefenseBarWidth = (stats.specialDefense / maxSpecialDefense).toFixed(2) * 100;
  const speedBarWidth = (stats.speed / maxSpeed).toFixed(2) * 100;

  return (
    <div>
      <h2 className="font-bold text-center">Stats</h2>
      <div className="flex align-middle">
        <p className={styles.statName}>HP</p>
        <div className={styles.bar} style={{ width: `${hpBarWidth}%` }}></div>
      </div>
      <div className="flex align-middle">
        <p className={styles.statName}>Attack</p>
        <div className={styles.bar} style={{ width: `${attackBarWidth}%` }}></div>
      </div>
      <div className="flex align-middle">
        <p className={styles.statName}>Defense</p>
        <div className={styles.bar} style={{ width: `${defenseBarWidth}%` }}></div>
      </div>
      <div className="flex align-middle">
        <p className={styles.statName}>Special Attack</p>
        <div className={styles.bar} style={{ width: `${specialAttackBarWidth}%` }}></div>
      </div>
      <div className="flex align-middle">
        <p className={styles.statName}>Special Defense</p>
        <div className={styles.bar} style={{ width: `${specialDefenseBarWidth}%` }}></div>
      </div>
      <div className="flex align-middle">
        <p className={styles.statName}>Speed</p>
        <div className={styles.bar} style={{ width: `${speedBarWidth}%` }}></div>
      </div>
    </div>
  );
};

export default Stats;
