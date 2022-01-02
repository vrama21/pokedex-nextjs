import { useEffect, useState } from 'react';
import { Squares, Triangles, Wedges } from 'components/Spinners';

const loadingAnimations = [Squares, Triangles, Wedges];

const Loading: React.FC = () => {
  const [randomInt, setRandomInt] = useState<number | undefined>(undefined);

  useEffect(() => {
    const random = Math.floor(Math.random() * loadingAnimations.length);

    setRandomInt(random);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {randomInt === 0 && <Triangles />}
      {randomInt === 1 && <Wedges />}
      {randomInt === 2 && <Squares />}
      <div className="font-bold text-xl">Loading ...</div>
    </div>
  );
};

export default Loading;
