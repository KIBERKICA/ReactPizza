import * as React from 'react';
import './components/App.css';
import Box from '@mui/material/Box';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import Card from './components/Card'
import Basket from './components/basket'
import Delivery from './components/delivery'
import DeliveryTwo from './components/deliverytwo'
import Conditions from './components/conditions'
import Stocks from './components/stocks'
import { NavLink as Link, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Routes>
          <Route path="/card" element={<Card />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/deliverytwo" element={<DeliveryTwo />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );

}