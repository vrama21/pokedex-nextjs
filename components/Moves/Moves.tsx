import { MovesTable } from 'components';
import { PokemonMove } from 'types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface MovesProps {
  moves: PokemonMove[];
}

const Moves: React.FC<MovesProps> = ({ moves }) => {
  const levelUpMoves = moves.filter((move) => move.method === 'level-up');
  const machineMoves = moves.filter((move) => move.method === 'machine');
  const eggMoves = moves.filter((move) => move.method === 'egg');
  const tutorMoves = moves.filter((move) => move.method === 'tutor');

  return (
    <div className="my-4">
      <h2 className="text-center font-bold mb-4">Moves</h2>
      <Tabs>
        <TabList className="flex">
          {levelUpMoves.length > 0 && <Tab>Level Up</Tab>}
          {eggMoves.length > 0 && <Tab>Breeding</Tab>}
          {machineMoves.length > 0 && <Tab>TM/HM</Tab>}
          {tutorMoves.length > 0 && <Tab>Tutor</Tab>}
        </TabList>
        {levelUpMoves.length > 0 && (
          <TabPanel>
            <MovesTable moves={levelUpMoves} moveType="Level Up" />
          </TabPanel>
        )}
        {eggMoves.length > 0 && (
          <TabPanel>
            <MovesTable moves={eggMoves} moveType="Breeding" hideLevelColumn={true} />
          </TabPanel>
        )}
        {machineMoves.length > 0 && (
          <TabPanel>
            <MovesTable moves={machineMoves} moveType="TM/HM" hideLevelColumn={true} />
          </TabPanel>
        )}
        {tutorMoves.length > 0 && (
          <TabPanel>
            <MovesTable moves={tutorMoves} moveType="Tutor" hideLevelColumn={true} />
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
};

export default Moves;
