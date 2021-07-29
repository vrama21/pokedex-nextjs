import styles from './container.module.scss';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;

export default Container;
