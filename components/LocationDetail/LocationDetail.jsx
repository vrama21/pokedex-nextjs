import { startCase } from 'lodash';

const LocationDetail = ({ location }) => (
  <div className="text-sm text-center">
    <p>{`Lv at ${startCase(location.replace('-', ' '))}`}</p>
  </div>
);

export default LocationDetail;
