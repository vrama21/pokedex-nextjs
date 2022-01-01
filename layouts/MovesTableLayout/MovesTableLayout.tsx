import styles from './MovesTableLayout.module.scss';

const MovesTableLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MovesTableLayout;
