import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import './App.css';
import Chile from './components/chile';
import Argentina from './components/argentina';
import Home from './components/home';

function Layout() {
  return (
    <div className="not-navbar"><Outlet /></div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="chile" element={<Chile />} />
          <Route path="argentina" element={<Argentina />} />
          <Route
            path="rickastley"
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
}

export default App;
