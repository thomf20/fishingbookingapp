import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoatList from '../components/BoatList';
import WeatherCard from '../components/WeatherCard';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Fishing Booking App</h1>
      <WeatherCard />
      <BoatList />
      <Footer />
    </div>
  );
};

export default HomePage;
