import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import { useSelector } from 'react-redux';
import moment from 'moment';

Chart.register(...registerables);

const DataHistoryCountry = () => {
  const casesdata = useSelector((store) => store.cases.historicallObj.timeline.cases);
  const deathsdata = useSelector((store) => store.cases.historicallObj.timeline.deaths);
  const recovereddata = useSelector((store) => store.cases.historicallObj.timeline.recovered);
  const timeLabels = Object.keys(casesdata);
  const formattedDates = timeLabels.map((date) => moment(date, 'M/D/YY').format('YYYY-MM-DD'));
  const casesvalues = Object.values(casesdata);
  const deathsvalues = Object.values(deathsdata);
  const recoveredvalues = Object.values(recovereddata);
  const chartCasesData = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Cases',
        data: casesvalues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
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
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartRecoveredData = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Recovered',
        data: recoveredvalues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <div>
      <div>Hola como estay?</div>
      <div>
        <h2>Graph</h2>
        <Line data={chartCasesData} options={options} />
        <Line data={chartDeathsData} options={options} />
        <Line data={chartRecoveredData} options={options} />
      </div>
    </div>
  );
};

export default DataHistoryCountry;
