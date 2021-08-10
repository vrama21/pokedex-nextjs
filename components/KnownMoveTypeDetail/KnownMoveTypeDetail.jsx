import { startCase } from 'lodash';

const KnownMoveTypeDetail = ({ knownMoveType }) => (
  <div className="text-xs text-center">
    <p>{`Lv knowning ${startCase(knownMoveType)}`}</p>
  </div>
);
export default KnownMoveTypeDetail;
