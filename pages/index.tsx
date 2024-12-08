import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoatList from '../components/BoatList';
import WeatherCard from '../components/WeatherCard';
import Notification from '../components/Notification';
import Divider from '../components/Divider';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Header />
      
      <Notification message="Welcome to the Fishing Booking App!" type="success" />
      
      <Divider />
      
      <WeatherCard />
      
      <Divider />
      
      <BoatList />
      
      <Footer />
    </div>
  );
};

export default HomePage;
