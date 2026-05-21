const currentYear = new Date ().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temperature = 80;
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}

const windchill = document.getElementById("windchill");

if (temperature <= 50 && windSpeed > 3) {
    windchill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°F`;
} else {
    windchill.textContent = "N/A";
}