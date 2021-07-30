import { startCase } from 'lodash';

const UseItemDetail = ({ item }) => (
  <div className="text-sm text-center">
    <p>{startCase(item.replace('-', ' '))}</p>
  </div>
);

export default UseItemDetail;
