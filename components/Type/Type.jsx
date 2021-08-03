import styles from './Type.module.scss';

const Type = ({ type }) => <p className={`${styles.pokemonType} type-${type}`}>{type}</p>;

export default Type;
