import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setColor } from '../redux/cases/casesSlice';

const Settings = () => {
  const dispatch = useDispatch();

  const handleColors = (e) => {
    dispatch(setColor(e));
  };

  return (
    <div>
      <Link className="menuimg dflex" to="/">Go back</Link>
      <button type="button" onClick={() => handleColors('Red')}>Red</button>
      <button type="button" onClick={() => handleColors('Blue')}>Blue</button>
      <button type="button" onClick={() => handleColors('Green')}>Green</button>
      <button type="button" onClick={() => handleColors('Black')}>Black</button>
      <button type="button" onClick={() => handleColors('White')}>White</button>
    </div>
  );
};

export default Settings;
