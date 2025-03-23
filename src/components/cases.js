import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countriesArray from './countriesarray';

const Cases = () => {
  const background = useSelector((store) => store.cases.color);
  const [search, setSearch] = useState('');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value.trim().toLowerCase());
  };
  // eslint-disable-next-line max-len
  const filteredCountries = countriesArray.filter((country) => country.name.toLowerCase().includes(search));

  return (
    <div className={`cases-container bc${background}`}>
      <div className="search-container">
        <input
          type="text"
          value={search}
          className="search-input"
          onChange={handleSearchChange}
          placeholder="Search by country"
        />
      </div>

      <div className={`countries-grid ${animated ? 'animated' : ''}`}>
        {filteredCountries.map((country, index) => (
          // eslint-disable-next-line max-len
          <Link
            className={`country-card country-item-${index % 8} ${(index + 1) % 4 < 2 ? 'bcUp' : 'bcDown'}${background}`}
            to={`../country${country.path}`}
            key={country.name}
          >
            <div className="country-image-container">
              <img
                src={country.image}
                alt={country.name}
                className="country-image"
              />
            </div>
            <div className={`country-name bc${background}`}>{country.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cases;
