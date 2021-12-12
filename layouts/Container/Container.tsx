import { ReactNode } from 'react';
import styles from './Container.module.scss';

const Container = ({ className, children }: { className?: string; children: ReactNode }) => {
  const formattedClassName = className ? `${className} ` : '';

  return <div className={`${formattedClassName}${styles.container}`}>{children}</div>;
};

export default Container;
