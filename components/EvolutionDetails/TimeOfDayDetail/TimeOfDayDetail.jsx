import { capitalize } from 'lodash';

const TimeOfDayDetail = ({ timeOfDay }) => (
  <div className="text-xs text-center">
    <p>{`Lv at ${capitalize(timeOfDay)}`}</p>
  </div>
);

export default TimeOfDayDetail;
