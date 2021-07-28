import styles from './statbar.module.scss';

const Statbar = ({ baseStat, baseStatMaxValue, statName, statPercentage }) => {
  const getStatPercentageColor = (statPercentage) => {
    if (statPercentage > 90) return styles.statBar6;
    if (statPercentage <= 90 && statPercentage >= 70) return styles.statBar5;
    if (statPercentage <= 70 && statPercentage >= 50) return styles.statBar4;
    if (statPercentage <= 50 && statPercentage >= 30) return styles.statBar3;
    if (statPercentage <= 30 && statPercentage >= 10) return styles.statBar2;
    else return styles.statBar1;
  };

  return (
    <div className={styles.statBarContainer}>
      <p className={styles.statName}>{statName}</p>
      <p className={styles.baseStat}>{baseStat}</p>
      <div className="flex w-2/3 mx-2">
        <div className={`${styles.statBar} ${getStatPercentageColor(statPercentage)}`} style={{ width: `${statPercentage}%` }} />
      </div>
      <p className={styles.maxStat}>{baseStatMaxValue}</p>
    </div>
  );
};

export default Statbar;