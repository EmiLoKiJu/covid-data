import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import countriesArray from './countriesarray';

const Cases = () => {
  const background = useSelector((store) => store.cases.color);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value.trim().toLowerCase());
  };
  // eslint-disable-next-line max-len
  const filteredCountries = countriesArray.filter((country) => country.name.toLowerCase().includes(search));

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by country"
      />
      <div className={`dflex wrap bc${background}`}>
        {filteredCountries.map((country, index) => (
          <div className="dflex menuimg" key={country.name}>
            <Link className="dflex" to={`../country${country.path}`}>
              <img
                src={country.image}
                alt={country.name}
                className={`country ${(index + 1) % 4 < 2 ? 'bcUp' : 'bcDown'}${background}`}
              />
              <div className={`countryname bc${background}`}>{country.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cases;
