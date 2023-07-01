import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../redux/cases/casesSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const background = useSelector((store) => store.cases.color);

  const handleColors = (e) => {
    localStorage.setItem('selectedColor', e);
    dispatch(setColor(e));
  };

  return (
    <>
      <div className="dflex">
        <div className="blockcont dfex">
          <div className="block1 bcRed" />
          <div className="dflex">
            <div className="block2 bcUpRed" />
            <div className="block3 bcDownRed" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('Red')}>Red</button>
        </div>
        <div className="blockcont">
          <div className="block1 bcBlue" />
          <div className="dflex">
            <div className="block2 bcUpBlue" />
            <div className="block3 bcDownBlue" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('Blue')}>Blue</button>
        </div>
        <div className="blockcont">
          <div className="block1 bcGreen" />
          <div className="dflex">
            <div className="block2 bcUpGreen" />
            <div className="block3 bcDownGreen" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('Green')}>Green</button>
        </div>
        <div className="blockcont">
          <div className="block1 bcBlack" />
          <div className="dflex">
            <div className="block2 bcUpBlack" />
            <div className="block3 bcDownBlack" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('Black')}>Black</button>
        </div>
        <div className="blockcont">
          <div className="block1 bcWhite" />
          <div className="dflex">
            <div className="block2 bcUpWhite" />
            <div className="block3 bcDownWhite" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('White')}>White</button>
        </div>
        <div className="blockcont">
          <div className="block1 bcPink" />
          <div className="dflex">
            <div className="block2 bcUpPink" />
            <div className="block3 bcDownPink" />
          </div>
          <button className="block1" type="button" onClick={() => handleColors('Pink')}>Pink</button>
        </div>
      </div>
      <div className={`data bcUp${background}`}>Hola como estay?</div>
    </>
  );
};

export default Settings;
