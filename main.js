document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weatherForm');
    const resultDiv = document.getElementById('weatherResult');
    const apiKey = 'YOUR_API_KEY'
    // const apiKey = '304fb3d5a4286003b841c2146b7dc997'; 
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

            resultDiv.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } catch (error) {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
