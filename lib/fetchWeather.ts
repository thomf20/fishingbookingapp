export const fetchWeatherForecast = async () => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const lat = '59.1833';
    const lon = '17.6167';
  
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
  
    const data = await response.json();
    return data;
  };
  