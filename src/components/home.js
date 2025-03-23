import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import covid from '../img/covid.svg';
import Settings from '../img/Settings.png';
import SHOTSTREAM from '../img/SHOTSTREAM.png';
import STATS from '../img/STATS.png';
import bargraphreal from '../img/bargraphreal.png';

const Home = () => {
  const background = useSelector((store) => store.cases.color);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  return (
    <div className={`home dflex flexcol acenter bc${background}`}>
      <div className="almostnavbar dflex spacebetween">
        <svg width="120" height="120" className="covid-icon">
          <image xlinkHref={covid} width="100%" height="100%" />
        </svg>
        <div className="titlecont dflex flexcol jcenter">
          <h2 className="lato title-animation">Covid Stats</h2>
          <h3 className="gill-sans subtitle-animation">made By EmiLoKiJu</h3>
          <Link to="./credits" className="credits-link">
            <h3 className={`gill-sans bc${background}`}>See Credits</h3>
          </Link>
        </div>
      </div>

      <div className={`menu-container ${animated ? 'animated' : ''}`}>
        <Link className="menuimg menu-item-1" to="./Cases">
          <div className="img-container">
            <img className="imgmenu" src={bargraphreal} alt="Cases" />
          </div>
          <span className={`menu-label bc${background}`}>Cases</span>
        </Link>

        <Link className="menuimg menu-item-2" to="./Settings">
          <div className="img-container">
            <img className="imgmenu" src={Settings} alt="Settings" />
          </div>
          <span className={`menu-label bc${background}`}>Settings</span>
        </Link>

        <Link className="menuimg menu-item-3" to="./HistoryCases">
          <div className="img-container">
            <img className="imgmenu" src={STATS} alt="Stats" />
          </div>
          <span className={`menu-label bc${background}`}>History</span>
        </Link>

        <Link className="menuimg menu-item-4" to="./Rickastley">
          <div className="img-container">
            <img className="imgmenu" src={SHOTSTREAM} alt="Surprise" />
          </div>
          <span className={`menu-label bc${background}`}>Surprise</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
