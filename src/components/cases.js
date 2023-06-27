import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import chilesvg from '../img/chilesvg.svg';
import argentinasvg from '../img/argentinasvg.svg';

const Cases = () => {
  const background = useSelector((store) => store.cases.color);

  return (
    <div className={`home dflex flexcol acenter bc${background}`}>
      <div>Cases</div>
      <div className="dflex">
        <Link className="menuimg dflex" to="../Chile"><img src={chilesvg} alt="Chile" className={`country bc${background}`} /></Link>
        <Link className="menuimg dflex" to="../Argentina"><img src={argentinasvg} alt="Argentima" className={`country bc${background}`} /></Link>
      </div>
    </div>
  );
};

export default Cases;
