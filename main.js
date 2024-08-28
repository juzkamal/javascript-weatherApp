document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weatherForm');
    const resultDiv = document.getElementById('weatherResult');
    const apiKey = '957b5f93790fd634263b4f372cddfa42'; 
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
