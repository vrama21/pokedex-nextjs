import React from 'react';
import styles from './PageLayout.module.scss';
import { SearchBar } from 'components';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <SearchBar />
      {children}
    </div>
  );
};

export default PageLayout;
