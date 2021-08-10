import { startCase } from 'lodash';

const KnownMoveDetail = ({ knownMove }) => (
  <div className="text-xs text-center">
    <p>{`Lv knowning ${startCase(knownMove)}`}</p>
  </div>
);
export default KnownMoveDetail;
