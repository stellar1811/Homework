document.addEventListener("DOMContentLoaded", function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19')
        .then(response => response.json())
        .then(data => {
            let weatherInfo = '<p>Температура: ' + Math.round(data.main.temp) + '°C</p>';
            weatherInfo += '<p>Тиск: ' + data.main.pressure + ' hPa</p>';
            weatherInfo += '<p>Опис: ' + data.weather[0].description + '</p>';
            weatherInfo += '<p>Вологість: ' + data.main.humidity + '%</p>';
            weatherInfo += '<p>Швидкість вітру: ' + data.wind.speed + ' м/с</p>';
            weatherInfo += '<p>Напрям вітру: ' + data.wind.deg + '°</p>';
            weatherInfo += '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="Погодний значок">';
            
            document.getElementById('weather').innerHTML = weatherInfo;
        })
        .catch(error => console.error('Помилка при отриманні даних з сервера:', error));
});