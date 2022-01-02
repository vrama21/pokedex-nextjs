import styles from './Container.module.scss';

interface ContainerProps {
  className: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return className ? (
    <div className={className}>
      <div className={styles.container}>{children}</div>
    </div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default Container;
