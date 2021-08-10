import { startCase } from 'lodash';

const TradeDetail = ({ heldItem }) => (
  <div className="text-xs text-center">
    <p>Trade</p>
    {heldItem && <span>w/ {startCase(heldItem)}</span>}
  </div>
);

export default TradeDetail;
