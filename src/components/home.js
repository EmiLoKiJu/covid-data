import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import DONOTPRESS from '../img/DONOTPRESS.png';
import covid from '../img/covid.svg';
import Settings from '../img/Settings.png';
import SHOTSTREAM from '../img/SHOTSTREAM.png';
import STATS from '../img/STATS.png';

const Home = () => {
  const background = useSelector((store) => store.cases.color);
  return (
    <div className={`home dflex flexcol acenter bc${background}`}>
      <div className="almostnavbar dflex spacebetween">
        <svg width="120" height="120">
          <image xlinkHref={covid} width="100%" height="100%" />
        </svg>
        <div className="titlecont dflex flexcol jcenter">
          <h2 className="lato">Covid stats</h2>
          <h3 className="gill-sans">made By EmiLoKiJu</h3>
          <h3 className="gill-sans">See Credits</h3>
        </div>
      </div>
      <div className="dflex">
        <Link className="menuimg dflex" to="./Rickastley"><img className="imgmenu" src={DONOTPRESS} alt="DontPress" /></Link>
        <Link className="menuimg dflex" to="./Settings"><img className="imgmenu" src={Settings} alt="Settings" /></Link>
      </div>
      <div className="dflex">
        <Link className="menuimg dflex" to="./Cases"><img className="imgmenu" src={STATS} alt="Stats" /></Link>
        <Link className="menuimg dflex" to="./Rickastley"><img className="imgmenu" src={SHOTSTREAM} alt="DontPress" /></Link>
      </div>
    </div>
  );
};

export default Home;
