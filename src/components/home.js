import DONOTPRESS from '../img/DONOTPRESS.png';
import covid from '../img/covid.svg';
import Settings from '../img/Settings.png';
import SHOTSTREAM from '../img/SHOTSTREAM.png';
import STATS from '../img/STATS.png';

const Home = () => (
  <div className="home dflex flexcol acenter">
    <div className="navbar dflex spacebetween">
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
      <a className="menuimg dflex" href="./rickastley"><img src={DONOTPRESS} alt="DontPress" /></a>
      <img src={Settings} alt="DontPress" className="menuimg" />
    </div>
    <div className="dflex">
      <img src={STATS} alt="DontPress" className="menuimg" />
      <img src={SHOTSTREAM} alt="DontPress" className="menuimg" />
    </div>
  </div>
);

export default Home;
