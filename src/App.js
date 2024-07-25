import React from 'react'
import { Routes,Route,Link} from 'react-router-dom';
import {Layout, Typography, Space, } from 'antd';
import { NavBar, Homepage, Cryptocurrencies, CryptoDetails } from './components';
import './App.css'

const App = () => {
    return (
        <div className='app'>
                <div className='navbar'>
                    <NavBar/>
                </div>
                <div className='main'>
                    <Layout>
                        <div className='routes'>
                            <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/crypto/:coinID" element={<CryptoDetails />} />
                            </Routes>
                        </div>
                    </Layout>
                    <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        
                    </Space>
                    </div>
                </div>
        </div>
    )
}

export default App