
const WEATHER_API_KEY = "1da4b3f5d6b6f25f82f9354cffe8d082"; 
const CITY = "Czeluscin";
const COUNTRY_CODE = "PL";

async function loadWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Czelu%C5%9Bcin&appid=1da4b3f5d6b6f25f82f9354cffe8d082&units=metric&lang=pl`
        );
        const data = await response.json();

        if (data.cod === 200) {
            const temp = Math.round(data.main.temp);
            const desc = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            const weatherHtml = `
                <img src="${iconUrl}" alt="${desc}" class="weather-icon">
                <div>
                    <div><strong>${temp}&deg;C</strong></div>
                    <div>${desc.charAt(0).toUpperCase() + desc.slice(1)}</div>
                    <div>Wilgotność: ${data.main.humidity}%</div>
                    <div>Wiatr: ${data.wind.speed} m/s</div>
                </div>
            `;
            document.getElementById("weather").innerHTML = weatherHtml;
        } else {
            document.getElementById("weather").innerHTML = `<p>Nie udalo sie zaladowac pogody. Spróbuj pózniej.</p>`;
        }
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Blad ladowania pogody.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", loadWeather);


