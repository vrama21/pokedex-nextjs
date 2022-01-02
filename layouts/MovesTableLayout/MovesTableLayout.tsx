import styles from './MovesTableLayout.module.scss';

const MovesTableLayout: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MovesTableLayout;
