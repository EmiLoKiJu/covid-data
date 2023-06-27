import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHistoricallData } from '../redux/cases/casesSlice';
import DataHistoryCountry from './datahistorycountry';

const HistoryCountry = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const { isLoadingHistory } = useSelector((store) => store.cases);

  useEffect(() => {
    dispatch(getHistoricallData(country, '10'));
  }, []);

  if (isLoadingHistory) {
    return (
      <div className="loading">
        <h1>Loading History...</h1>
      </div>
    );
  }

  return (
    <div>
      <DataHistoryCountry />
    </div>
  );
};

export default HistoryCountry;
