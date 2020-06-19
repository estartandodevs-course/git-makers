function transformarCelsiusParaFahrenheit(temperaturaCelsius) {
  return (temperaturaCelsius * 9) / 5 + 32;
}
const fahrenheit = transformarCelsiusParaFahrenheit(35);
console.log(fahrenheit);
