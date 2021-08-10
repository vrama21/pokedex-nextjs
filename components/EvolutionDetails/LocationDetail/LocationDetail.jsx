import { startCase } from 'lodash';

const LocationDetail = ({ location }) => (
  <div className="text-xs text-center">
    <p>{`Lv at ${startCase(location.replace('-', ' '))}`}</p>
  </div>
);

export default LocationDetail;
