import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCases } from '../redux/cases/casesSlice';

const Chile = () => {
  const cases = useSelector((store) => store.cases.casesObj);
  const { isLoading } = useSelector((store) => store.cases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCases('Chile'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading Cases...</h1>
      </div>
    );
  }

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

export default Chile;
