import { ReactNode } from 'react';
import styles from './Container.module.scss';

const Container = ({ className, children }: { className?: string; children: ReactNode }) => {
  return className ? (
    <div className={className}>
      <div className={styles.container}>{children}</div>
    </div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default Container;
