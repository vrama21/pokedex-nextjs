import React from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
