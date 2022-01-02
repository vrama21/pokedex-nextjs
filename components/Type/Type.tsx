import styles from './Type.module.scss';

interface TypeProps {
  type: string;
}

const Type: React.FC<TypeProps> = ({ type }) => <p className={`${styles.pokemonType} type-${type}`}>{type}</p>;

export default Type;
