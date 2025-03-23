import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCases } from '../redux/cases/casesSlice';
import DataCountry from './datacountry';
import countriesArray from './countriesarray';

const Country = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const { isLoadingCases } = useSelector((store) => store.cases);
  const background = useSelector((store) => store.cases.color);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
    dispatch(getCases(country));
  }, [dispatch, country]); // Added dependencies to satisfy exhaustive-deps

  const greeting = (countryname) => {
    for (let i = 0; i < countriesArray.length; i += 1) {
      const thiscountry = countriesArray[i];
      if (thiscountry.name === countryname) {
        return thiscountry.greeting;
      }
    }
    return 'Hi, how are you?';
  };

  if (isLoadingCases) {
    return (
      <div className={`bc${background} loading`}>
        <h1 className="loading-text">Loading Data...</h1>
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div data-testid="datacont" className={`country-data-container ${animated ? 'animated' : ''}`}>
      <DataCountry phrase={greeting(country)} />
    </div>
  );
};

export default Country;
