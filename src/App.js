import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Chile from './components/chile';
import Argentina from './components/argentina';
import Home from './components/home';
import Settings from './components/settings';
import Cases from './components/cases';

const Layout = () => {
  const background = useSelector((store) => store.cases.color);
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && (
        <div className={`navbar bc${background}`}>
          <h2>{location.pathname.slice(1)}</h2>
        </div>
      )}
      <div className="not-navbar">
        <Outlet />
      </div>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="Settings" element={<Settings />} />
        <Route path="Cases" element={<Cases />} />
        <Route path="Chile" element={<Chile />} />
        <Route path="Argentina" element={<Argentina />} />
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

export default App;
