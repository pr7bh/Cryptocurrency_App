import React from 'react';
import { Spin } from 'antd';
import './Loader.css'; // Import the CSS file

const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;
