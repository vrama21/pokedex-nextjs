import styles from './Container.module.scss';

const Container = ({ className = '', children }) => {
  const formattedClassName = className ? `${className} ` : className;

  return <div className={`${formattedClassName}${styles.container}`}>{children}</div>;
};

export default Container;
