import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  Link,
} from 'react-router-dom';
import { setColor } from './redux/cases/casesSlice';
import './App.css';
import Home from './components/home';
import Settings from './components/settings';
import Cases from './components/cases';
import Country from './components/country';
import HistoryCases from './components/historycases';
import HistoryCountry from './components/historycountry';
import CreditsForThis from './components/credits';
import previousbutton from './img/previousbutton.svg';
import previousbuttonblack from './img/previousbuttonblack.svg';
import settingsicon from './img/settingsicon.svg';
import settingsiconblack from './img/settingsiconblack.svg';

const Layout = () => {
  const background = useSelector((store) => store.cases.color);
  const location = useLocation();
  const navigate = useNavigate();
  const showNavbar = location.pathname !== '/';
  const pathForNav = location.pathname.split('/').pop().replace(/%20/g, ' ');

  return (
    <div className={`bc${background} vh100`}>
      {showNavbar && (
        <div className="dflex spacebetween acenter navbar">
          <svg width="24" height="24" className={`bc${background}`}>
            {background === 'White' || background === 'Pink' ? (
              <image onClick={() => navigate(-1)} xlinkHref={previousbuttonblack} width="100%" height="100%" />
            ) : (
              <image onClick={() => navigate(-1)} xlinkHref={previousbutton} width="100%" height="100%" />
            )}
          </svg>
          <div className={`bc${background} navtitle`}>
            <h2>{pathForNav}</h2>
          </div>
          <svg width="24" height="24" className={`bc${background}`}>
            {background === 'White' || background === 'Pink' ? (
              <Link to="./Settings"><image xlinkHref={settingsiconblack} width="100%" height="100%" /></Link>
            ) : (
              <Link to="./Settings"><image xlinkHref={settingsicon} width="100%" height="100%" /></Link>
            )}
          </svg>
        </div>
      )}
      <div className="not-navbar">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedColor = localStorage.getItem('selectedColor');
    if (storedColor) {
      dispatch(setColor(storedColor));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="Settings" element={<Settings />} />
          <Route path="Cases" element={<Cases />} />
          <Route path="HistoryCases" element={<HistoryCases />} />
          <Route path="country/:country" element={<Country />} />
          <Route path="historycountry/:country" element={<HistoryCountry />} />
          <Route path="credits" element={<CreditsForThis />} />
          <Route
            path="RickAstley"
            element={(
              <iframe
                width="360"
                height="215"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              )}
          />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
