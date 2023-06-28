import { useEffect } from 'react';
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

  const greeting = (countryname) => {
    for (let i = 0; i < countriesArray.length; i += 1) {
      const thiscountry = countriesArray[i];
      if (thiscountry.name === countryname) {
        return thiscountry.greeting;
      }
    }
    return 'Hi, how are you?';
  };

  useEffect(() => {
    dispatch(getCases(country));
  }, []);

  if (isLoadingCases) {
    return (
      <div className={`bc${background} loading`}>
        <h1>Loading Data...</h1>
      </div>
    );
  }

  return (
    <div>
      <DataCountry phrase={greeting(country)} />
    </div>
  );
};

export default Country;
