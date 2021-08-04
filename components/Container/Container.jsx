import styles from './Container.module.scss';

const Container = ({ className, children }) => <div className={`${className || ''}${styles.container}`}>{children}</div>;

export default Container;
