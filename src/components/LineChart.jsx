import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, ChartTitle, Tooltip, Legend);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  if (coinHistory?.data?.history) {
    for (let i = 0; i < coinHistory.data.history.length; i += 1) {
      coinPrice.push(coinHistory.data.history[i].price);
      coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }
  } else {
    // Handle the case where coinHistory is not available or has no data
    return <p>No data available</p>;
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Price: $${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)'
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
