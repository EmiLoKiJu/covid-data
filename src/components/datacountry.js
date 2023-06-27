import { useSelector } from 'react-redux';

const DataCountry = () => {
  const cases = useSelector((store) => store.cases.casesObj);
  return (
    <div>
      <div>Hola como estay?</div>
      <div>
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
