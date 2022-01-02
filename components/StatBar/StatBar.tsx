import styles from './StatBar.module.scss';

interface StatBarProps {
  baseStat: number;
  baseStatMaxValue: number;
  statName: string;
  statPercentage: number;
}

const StatBar: React.FC<StatBarProps> = ({ baseStat, baseStatMaxValue, statName, statPercentage }) => {
  const getStatPercentageColor = (percentage: number) => {
    if (percentage > 90) return styles.statBar6;
    if (percentage <= 90 && percentage >= 70) return styles.statBar5;
    if (percentage <= 70 && percentage >= 50) return styles.statBar4;
    if (percentage <= 50 && percentage >= 30) return styles.statBar3;
    if (percentage <= 30 && percentage >= 10) return styles.statBar2;
    return styles.statBar1;
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

export default StatBar;
