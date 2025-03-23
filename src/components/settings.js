import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setColor } from '../redux/cases/casesSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const background = useSelector((store) => store.cases.color);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  const handleColors = (e) => {
    localStorage.setItem('selectedColor', e);
    dispatch(setColor(e));
  };

  const colorOptions = [
    { name: 'Red', label: 'Red' },
    { name: 'Blue', label: 'Blue' },
    { name: 'Green', label: 'Green' },
    { name: 'Black', label: 'Black' },
    { name: 'White', label: 'White' },
    { name: 'Pink', label: 'Pink' },
  ];

  return (
    <div className={`settings-container bc${background}`}>
      <h2 className="settings-title title-animation">Theme Settings</h2>
      <p className="settings-subtitle subtitle-animation">Choose your preferred color theme</p>

      <div className={`color-options-grid ${animated ? 'animated' : ''}`}>
        {colorOptions.map((color, index) => (
          <button
            key={color.name}
            type="button"
            className={`color-option color-item-${index + 1} ${background === color.name ? 'selected' : ''}`}
            onClick={() => handleColors(color.name)}
          >
            <div className={`color-preview bc${color.name}`} />
            <div className="color-samples">
              <div className={`color-sample-up bcUp${color.name}`} />
              <div className={`color-sample-down bcDown${color.name}`} />
            </div>
            <span className={`color-button bc${color.name}`}>
              {color.label}
            </span>
          </button>
        ))}
      </div>

      <div className={`theme-preview bcUp${background}`}>
        <h3>Theme Preview</h3>
        <p>This is how your selected theme looks</p>
      </div>
    </div>
  );
};

export default Settings;
