import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../lib/fetchWeather';

const WeatherCard = () => {
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchWeatherForecast();

        // Hämta dagens datum
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Nollställ tid för att matcha bara datum

        // Filtrera prognosdata och säkerställ att "idag" inkluderas
        const dailyForecast = data.list.filter((entry: any) => {
          const entryDate = new Date(entry.dt_txt);
          entryDate.setHours(0, 0, 0, 0);
          return entryDate >= today; // Inkludera från idag och framåt
        });

        // Ta de första 4 dagarna
        setForecast(dailyForecast.slice(0, 4));
      } catch (err: any) {
        setError(err.message);
      }
    };

    getForecast();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!forecast.length) {
    return <p>Loading forecast...</p>;
  }

  const formatDate = (dateString: string, index: number) => {
    const days = ['Today', 'Tomorrow'];
    const fallbackDate = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };

    // Första två dagarna: använd "Idag" och "Imorgon" med datum
    if (index < days.length) {
      return `${days[index]} (${fallbackDate.toLocaleDateString('sv-SE', options)})`;
    }

    // För efterföljande dagar: visa bara datum
    return fallbackDate.toLocaleDateString('sv-SE', options);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          maxWidth: '300px',
          textAlign: 'center',
        }}
      >
        <h2>4-Day Forecast for Lake Måsnaren</h2>
        {forecast.map((day, index) => (
          <div key={day.dt} style={{ marginBottom: '10px' }}>
            <p>{formatDate(day.dt_txt, index)}</p>
            <p>Temperature: {day.main.temp.toFixed(1)}°C</p>
            <p>Wind Speed: {day.wind.speed.toFixed(1)} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default WeatherCard;
