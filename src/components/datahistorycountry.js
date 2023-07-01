// eslint-disable import/no-extraneous-dependencies

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import { useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

Chart.register(...registerables);

const DataHistoryCountry = ({ phrase }) => {
  const casesdata = useSelector((store) => store.cases.historicallObj.timeline.cases);
  const deathsdata = useSelector((store) => store.cases.historicallObj.timeline.deaths);
  const timeLabels = Object.keys(casesdata);
  const formattedDates = timeLabels.map((date) => moment(date, 'M/D/YY').format('YYYY-MM-DD'));
  const casesvalues = Object.values(casesdata);
  const deathsvalues = Object.values(deathsdata);
  const background = useSelector((store) => store.cases.color);

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

  const chartCasesData = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Cases',
        data: casesvalues,
        fill: false,
        backgroundColor: finalbc(background),
        borderColor: textcolor(background),
        color: textcolor(background),
      },
    ],
  };

  const chartDeathsData = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Deaths',
        data: deathsvalues,
        fill: false,
        backgroundColor: finalbc(background),
        borderColor: textcolor(background),
        color: textcolor(background),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        ticks: {
          color: textcolor(background),
        },
      },
      y: {
        type: 'linear',
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
    <div>
      <div className={`data bcUp${background}`}>{phrase}</div>
      <div>
        <Line className={`data bcDown${background}`} data={chartCasesData} options={options} />
        <Line className={`data bcDown${background}`} data={chartDeathsData} options={options} />
      </div>
    </div>
  );
};

DataHistoryCountry.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default DataHistoryCountry;
