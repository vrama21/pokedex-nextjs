import styles from './Type.module.scss';

const Type = ({ type }: { type: string }) => <p className={`${styles.pokemonType} type-${type}`}>{type}</p>;

export default Type;
