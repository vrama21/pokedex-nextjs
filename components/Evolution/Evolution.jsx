export default function Evolution({ evolutionChain }) {
  const { name, sprite } = evolutionChain;

  return (
    <div key={name}>
      <img className="mx-auto" src={sprite} alt={name} />
      <p className="text-center">{name}</p>
    </div>
  );
}
