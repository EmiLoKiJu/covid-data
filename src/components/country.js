import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCases } from '../redux/cases/casesSlice';
import DataCountry from './datacountry';

const Country = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const { isLoadingCases } = useSelector((store) => store.cases);

  useEffect(() => {
    dispatch(getCases(country));
  }, []);

  if (isLoadingCases) {
    return (
      <div className="loading">
        <h1>Loading History...</h1>
      </div>
    );
  }

  return (
    <div>
      <DataCountry />
    </div>
  );
};

export default Country;
