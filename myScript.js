

const apiURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '683f995b5597ae9b986d7189cf85b4f5';

document.getElementById('get-weather').addEventListener('click', () => {
	const city = document.getElementById('city').value;
	fetch(`${apiURL}?q=${city}&appid=${apiKey}`)
		.then(response => response.json())
		.then(data => {
			const weatherDescription = data.weather[0].description;
			const temperature = data.main.temp + '°C';
			const humidity = data.main.humidity + '%';
			const windSpeed = data.wind.speed + 'm/s';
			
			const today = new Date();
			const day = today.getDay(); // returns 0 (Sunday) to 6 (Saturday)
			const dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
			const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
			
			const date = today.getDate(); // returns the day of the month (1-31)
			const month = today.getMonth(); // returns 0 (January) to 11 (December)
			const year = today.getFullYear(); // returns the full year (e.g., 2024)
			const dateString = `${date}, ${monthString}, ${year}`;
			

			document.getElementById('weather-description').innerText = weatherDescription;
			document.getElementById('temperature').innerText = temperature;
			document.getElementById('humidity').innerText = humidity;
			document.getElementById('wind-speed').innerText = windSpeed;
			document.getElementById("day").innerText = dayString;
			document.getElementById("date").innerText = dateString;

		})
		.catch(error => console.error(error));
		
});
