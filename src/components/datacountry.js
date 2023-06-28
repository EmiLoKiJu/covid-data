import { useSelector } from 'react-redux';

const DataCountry = () => {
  const cases = useSelector((store) => store.cases.casesObj);
  const background = useSelector((store) => store.cases.color);

  return (
    <div>
      <div className={`data bcDown${background}`}>Hola como estay?</div>
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

export default DataCountry;
