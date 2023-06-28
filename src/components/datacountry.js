import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const DataCountry = ({ phrase }) => {
  const cases = useSelector((store) => store.cases.casesObj);
  const background = useSelector((store) => store.cases.color);

  return (
    <div>
      <div className={`data bcDown${background}`}>{phrase}</div>
      <div className={`data bcUp${background}`}>
        {Object.entries(cases).map(([key, value]) => (
          <div key={key}>
            <span>
              {key}
              :
              {' '}
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

DataCountry.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default DataCountry;
