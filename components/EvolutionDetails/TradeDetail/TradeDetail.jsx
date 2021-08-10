import { startCase } from 'lodash';

const TradeDetail = ({ heldItem }) => (
  <div className="text-xs text-center">
    <span>{heldItem ? `Trade w/ ${startCase(heldItem)}` : 'Trade'}</span>
    {/* {heldItem &&  */}
  </div>
);

export default TradeDetail;
