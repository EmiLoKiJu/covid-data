import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

const DataCountry = ({ phrase }) => {
  const cases = useSelector((store) => store.cases.casesObj);
  const background = useSelector((store) => store.cases.color);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  const finalbc = (background) => {
    switch (background) {
      case 'White':
        return 'rgba(221, 221, 221, 1)';
      case 'Black':
        return 'rgba(32, 32, 32, 1)';
      case 'Red':
        return 'rgba(201, 7, 7, 1)';
      case 'Blue':
        return 'rgba(15, 15, 172, 1)';
      case 'Green':
        return 'rgba(0, 94, 0, 1)';
      default:
        return 'rgba(236, 63, 159, 1)';
    }
  };

  const textcolor = (background) => (background === 'White' || background === 'Pink' ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)');

  const generateChartData = () => ({
    labels: ['Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'Covid overall stats',
        data: [cases.cases, cases.recovered, cases.deaths],
        backgroundColor: [finalbc(background), finalbc(background), finalbc(background)],
      },
    ],
  });

  const generateChartData2 = () => ({
    labels: ['Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'Today covid stats',
        data: [cases.todayCases, cases.todayRecovered, cases.todayDeaths],
        backgroundColor: [finalbc(background), finalbc(background), finalbc(background)],
      },
    ],
  });

  const generateChartData3 = () => ({
    labels: ['Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'Overall stats per one million',
        data: [cases.casesPerOneMillion, cases.recoveredPerOneMillion, cases.deathsPerOneMillion],
        backgroundColor: [finalbc(background), finalbc(background), finalbc(background)],
      },
    ],
  });

  const options = {
    scales: {
      x: {
        ticks: {
          color: textcolor(background),
        },
      },
      y: {
        ticks: {
          color: textcolor(background),
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: textcolor(background),
        },
      },
    },
  };

  return (
    <div className="data-container">
      <div className={`data-header bcDown${background}`}>{phrase}</div>
      <div className={`data-content bcUp${background} ${animated ? 'animated' : ''}`}>
        <div className="chart-container chart-item-1">
          <h3 className="chart-title">Overall Statistics</h3>
          <Bar
            data={generateChartData()}
            options={options}
            className="chart"
          />
        </div>

        <div className="chart-container chart-item-2">
          <h3 className="chart-title">Today&apos;s Statistics</h3>
          <Bar
            data={generateChartData2()}
            options={options}
            className="chart"
          />
        </div>

        <div className="chart-container chart-item-3">
          <h3 className="chart-title">Statistics Per Million</h3>
          <Bar
            data={generateChartData3()}
            options={options}
            className="chart"
          />
        </div>

        <div className="data-stats">
          {Object.entries(cases).map(([key, value], index) => (
            <div key={key} className={`stat-item stat-item-${index + 1}`}>
              <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              <div className="stat-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DataCountry.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default DataCountry;
