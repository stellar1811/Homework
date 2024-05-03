document.addEventListener("DOMContentLoaded", function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19')
        .then(response => response.json())
        .then(data => {
            let temperatureParagraph = document.createElement('p');
            temperatureParagraph.textContent = 'Температура: ' + Math.round(data.main.temp) + '°C';
            document.getElementById('weather').appendChild(temperatureParagraph);

            let pressureParagraph = document.createElement('p');
            pressureParagraph.textContent = 'Тиск: ' + data.main.pressure + ' hPa';
            document.getElementById('weather').appendChild(pressureParagraph);

            let descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = 'Опис: ' + data.weather[0].description;
            document.getElementById('weather').appendChild(descriptionParagraph);

            let humidityParagraph = document.createElement('p');
            humidityParagraph.textContent = 'Вологість: ' + data.main.humidity + '%';
            document.getElementById('weather').appendChild(humidityParagraph);

            let windSpeedParagraph = document.createElement('p');
            windSpeedParagraph.textContent = 'Швидкість вітру: ' + data.wind.speed + ' м/с';
            document.getElementById('weather').appendChild(windSpeedParagraph);

            let windDirectionParagraph = document.createElement('p');
            windDirectionParagraph.textContent = 'Напрям вітру: ' + data.wind.deg + '°';
            document.getElementById('weather').appendChild(windDirectionParagraph);

            let weatherIcon = document.createElement('img');
            weatherIcon.setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
            weatherIcon.setAttribute('alt', 'Погодний значок');
            document.getElementById('weather').appendChild(weatherIcon);
        })
        .catch(error => console.error('Помилка при отриманні даних з сервера:', error));
});