// Agrega un event listener al botón para que al hacer clic ejecute la función
document.getElementById("obtenerClima").addEventListener("click", () => {

const API_KEY = "d6f677f44cddff30f5cb6fc1862b439a";  // Asegúrate de reemplazar esto con tu clave API de OpenWeatherMap
const lat = -34.6037;  // Latitud de Buenos Aires
const lon = -58.3816;  // Longitud de Buenos Aires

// URL de la API para obtener el clima actual con las coordenadas de Buenos Aires
//const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;


// Realiza la solicitud usando fetch
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    console.log(data.cod);
    if(data.cod == "200"){
      mostrarClima(data);
      const temp = data.main.temp;
      const description = data.weather[0].description;

      console.log(`La temperatura actual en Buenos Aires es ${temp}°C y el clima es ${description}`);
    }
    else{
        console.error('Message del data:', data.message);
        document.getElementById("resultadoClima").innerHTML = `
        <h2>Error al obtener el clima</h2>
        <p>${data.message}</p>
    `;
    }
  })
  .catch(error => { // si el servidor da 500 va a entrar en este catch
    console.error('Error al obtener los datos del clima:', error);
  });

});

// Función para mostrar los datos del clima en la página.
const mostrarClima = (data) => {
    // Destructura los datos necesarios del objeto JSON que devuelve la API.
    const { name, main, weather } = data; // `name` es el nombre de la ciudad, `main` contiene temperatura y humedad, `weather` la descripción.

    // Obtiene la temperatura en Celsius.
    const temperatura = main.temp;

    // Obtiene la descripción del clima (ej.: "cielo despejado").
    const descripcion = weather[0].description;

    // Obtiene el porcentaje de humedad.
    const humedad = main.humidity;

    // Inserta los datos en el contenedor con id "resultadoClima", usando HTML dinámico.
    document.getElementById("resultadoClima").innerHTML = `
        <h2 class="text-center">Clima en ${name}</h2> <!-- Muestra el nombre de la ciudad -->
        <p class="text-danger">Temperatura: ${temperatura}°C</p> <!-- Muestra la temperatura -->
        <p>Descripción: ${descripcion}</p> <!-- Muestra la descripción del clima -->
        <p>Humedad: ${humedad}%</p> <!-- Muestra la humedad -->
    `;
};
