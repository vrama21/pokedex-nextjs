import styles from './SectionLayout.module.scss';

interface SectionLayoutProps {
  backgroundColor?: string;
  className?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ backgroundColor = '#000000', className, children }) => {
  const _className = className ? `${styles.containers} ${className}` : styles.container;

  return (
    <div style={{ backgroundColor }}>
      <div className={_className}>{children}</div>
    </div>
  );
};

export default SectionLayout;
