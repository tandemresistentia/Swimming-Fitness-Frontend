import React, { useEffect, useState } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import TrainingUpper from '../../../assets/images/dashboard/training-upper.png';
import './TrainingChart.css';
import axios from 'axios';
import 'chartjs-adapter-date-fns';
import 'chart.js/auto';
import BASE_URL from './../../config';
const TrainingChart = () => {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const fetchLogData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/api/logtraining/`, {
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const fetchedLogData = response.data;
          setLogData(fetchedLogData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLogData();
  }, []);

  const saveLogTraining = () => {
    const token = localStorage.getItem('token');
    const requestBody = {
      distance: setLogData.distance,
      time: setLogData.time,
      fastest_lap: setLogData.fastest_lap,
      // Add other log training fields as needed
    };
    // Rest of your saveLogTraining logic...
  };

  const latestLogData = logData.slice(-7); // Retrieve the 7 latest data points

  const chartData = {
    labels: latestLogData.map((entry, index) => `Data ${index}`), // Labels based on index
    datasets: [
      {
        label: 'Distance',
        data: latestLogData.map(entry => entry.distance),
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: 'Time',
        data: latestLogData.map(entry => entry.time),
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Fastest Lap',
        data: latestLogData.map(entry => entry.fastest_lap),
        borderColor: 'green',
        backgroundColor: 'green',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Data Entries',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    // Add more chart options as needed
  };

  return (
<div className="training-chart">
      <div className="training-chart-text">
        <img className="training-back" src={TrainingUpper} alt="Training Upper" />
        <p className="training-chart-text1">Training Chart</p>
      </div>
      <div className="training-chart-line"></div>
      <div className="training-chart-graph">
      <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TrainingChart;