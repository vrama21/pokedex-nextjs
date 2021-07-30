import { capitalize } from 'lodash';

const TimeOfDayDetail = ({ timeOfDay }) => (
  <div className="text-sm text-center">
    <p>{`Lv at ${capitalize(timeOfDay)}`}</p>
  </div>
);

export default TimeOfDayDetail;
