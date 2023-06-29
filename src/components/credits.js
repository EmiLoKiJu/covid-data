import { useSelector } from 'react-redux/es/hooks/useSelector';

const Credits = () => {
  const background = useSelector((store) => store.cases.color);
  return (
    <div className={`credits bc${background}`}>
      <div>
        Design: Nelson Sakwa on&nbsp;
        <a href="https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)" target="_blank" rel="noreferrer">Behance</a>
      </div>
      <div>
        Maps images:&nbsp;
        <a href="https://vemaps.com/" target="_blank" rel="noreferrer">Vemaps</a>
      </div>
      <div>
        Some of the icons:&nbsp;
        <a href="https://www.iconpacks.net/" target="_blank" rel="noreferrer">IconPacks</a>
      </div>
    </div>
  );
};

export default Credits;
