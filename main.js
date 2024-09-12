document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weatherForm');
    const resultdiv = document.getElementById('weatherResult');
    const tempElement = document.getElementById('temp');
    const weatherDescElement = document.getElementById('weatherDesc');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('windSpeed');
    const cityElement = document.getElementById('city-header');
    const apiKey = 'Your_API_KEY'
    //const apiKey = '304fb3d5a4286003b841c2146b7dc997'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const city = document.getElementById('city').value;

        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found or API request failed');
            }
            const data = await response.json();
            resultdiv.style.display = 'grid';
            cityElement.innerHTML = `Weather in ${data.name}`;
            tempElement.innerHTML = `<i class="fas fa-temperature-high"></i> Temperature: ${data.main.temp} °C`;
            weatherDescElement.innerHTML = `<i class="fas fa-cloud-sun"></i> Weather: ${data.weather[0].description}`;
            humidityElement.innerHTML = `<i class="fas fa-tint"></i> Humidity: ${data.main.humidity}%`;
            windSpeedElement.innerHTML = `<i class="fas fa-wind"></i> Wind Speed: ${data.wind.speed} m/s`;

        } catch (error) {
            // Handle errors, e.g., display an error message
            tempElement.innerHTML = `<p>Error: ${error.message}</p>`;
            weatherDescElement.innerHTML = '';
            humidityElement.innerHTML = '';
            windSpeedElement.innerHTML = '';
        }
    });
});
