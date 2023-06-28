import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import countriesArray from './countriesarray';

const Cases = () => {
  const background = useSelector((store) => store.cases.color);
  return (
    <div className={`dflex wrap bc${background}`}>
      {countriesArray.map((country, index) => (
        <div className="dflex menuimg" key={country.name}>
          <Link className="dflex" to={`../country${country.path}`}>
            <img
              src={country.image}
              alt={country.alt}
              className={`country ${(index + 1) % 4 < 2 ? 'bcUp' : 'bcDown'}${background}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cases;
