import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHistoricallData } from '../redux/cases/casesSlice';
import DataHistoryCountry from './datahistorycountry';
import countriesArray from './countriesarray';

const HistoryCountry = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const { isLoadingHistory } = useSelector((store) => store.cases);
  const background = useSelector((store) => store.cases.color);
  const storedValueStart = localStorage.getItem('selectedValue');
  const [selectedValue, setSelectedValue] = useState(storedValueStart || '12');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);

    const storedValue = localStorage.getItem('selectedValue');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    // eslint-disable-next-line max-len
    dispatch(getHistoricallData({ inputcountry: country, lastdays: storedValue * 30 || selectedValue * 30 }));
  }, []);

  const greeting = (countryname) => {
    for (let i = 0; i < countriesArray.length; i += 1) {
      const thiscountry = countriesArray[i];
      if (thiscountry.name === countryname) {
        return thiscountry.greeting;
      }
    }
    return 'Hi, how are you?';
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    localStorage.setItem('selectedValue', value);
    dispatch(getHistoricallData({ inputcountry: country, lastdays: value * 30 }));
  };

  if (isLoadingHistory) {
    return (
      <div className={`bc${background} loading`}>
        <h1 className="loading-text">Loading Historical Data...</h1>
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className={`history-country-container bc${background}`}>
      <div className={`history-controls ${animated ? 'animated' : ''}`}>
        <div>Graph time (months): </div>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="time-select"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      <DataHistoryCountry phrase={greeting(country)} />
    </div>
  );
};

export default HistoryCountry;
