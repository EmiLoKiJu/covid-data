import { useSelector } from 'react-redux/es/hooks/useSelector';

const Credits = () => {
  const background = useSelector((store) => store.cases.color);
  return (
    <div className={`credits bc${background}`}>
      <div>maps images: https://vemaps.com/</div>
      <div>some of the icons: https://www.iconpacks.net/</div>
      <div>Design: https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)</div>
    </div>
  );
};

export default Credits;
