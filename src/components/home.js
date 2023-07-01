import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import covid from '../img/covid.svg';
import Settings from '../img/Settings.png';
import SHOTSTREAM from '../img/SHOTSTREAM.png';
import STATS from '../img/STATS.png';
import bargraphreal from '../img/bargraphreal.png';

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
          <Link to="./credits"><h3 className={`gill-sans bc${background}`}>See Credits</h3></Link>
        </div>
      </div>
      <div className="dflex">
        <Link className="menuimg dflex" to="./Cases"><img className="imgmenu" src={bargraphreal} alt="DontPress" /></Link>
        <Link className="menuimg dflex" to="./Settings"><img className="imgmenu" src={Settings} alt="Settings" /></Link>
      </div>
      <div className="dflex">
        <Link className="menuimg dflex" to="./HistoryCases"><img className="imgmenu" src={STATS} alt="Stats" /></Link>
        <Link className="menuimg dflex" to="./Rickastley"><img className="imgmenu" src={SHOTSTREAM} alt="DontPress" /></Link>
      </div>
    </div>
  );
};

export default Home;
