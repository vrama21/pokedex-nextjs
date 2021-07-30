import { capitalize } from 'lodash';

const KnownMoveTypeDetail = ({ knownMoveType }) => (
  <div className="text-sm text-center">
    <p>{`Lv with a ${capitalize(knownMoveType)} type move`}</p>
  </div>
);
export default KnownMoveTypeDetail;
