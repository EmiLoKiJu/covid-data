import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const CreditsForThis = () => {
  const background = useSelector((store) => store.cases.color);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  const creditItems = [
    {
      label: 'Design',
      text: 'Nelson Sakwa on',
      link: 'https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)',
      linkText: 'Behance',
    },
    {
      label: 'Maps images',
      link: 'https://vemaps.com/',
      linkText: 'Vemaps',
    },
    {
      label: 'Some of the icons',
      link: 'https://www.iconpacks.net/',
      linkText: 'IconPacks',
    },
  ];

  return (
    <div className={`credits-container bc${background}`} data-testid="credits">
      <h2 className="credits-heading title-animation">Credits</h2>
      <div className={`credits-list ${animated ? 'animated' : ''}`}>
        {creditItems.map((item) => (
          <div key={item.label} className={`credit-item credit-item-${creditItems.indexOf(item) + 1}`}>
            <span className="credit-label">{item.label}</span>
            {item.text && (
              <span className="credit-text">
                {item.text}
              </span>
            )}
            <a
              className={`credit-link bc${background}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsForThis;
