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

  useEffect(() => {
    const storedValue = localStorage.getItem('selectedValue');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    dispatch(getHistoricallData({ inputcountry: country, lastdays: storedValue * 30 }));
  }, []);

  if (isLoadingHistory) {
    return (
      <div className={`bc${background} loading`}>
        <h1>Loading Historicall Data...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="dflex jcenter">
        <div>Graph time: </div>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="1">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        <div>Months</div>
      </div>
      <DataHistoryCountry phrase={greeting(country)} />
    </div>
  );
};

export default HistoryCountry;
