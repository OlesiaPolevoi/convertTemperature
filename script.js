const inputKelvin = document.querySelector(".inputKelvin");
const btn = document.querySelector(".btn");

const convertTemperature = btn.addEventListener("click", () => {
  // assign value to a constant variable
  const kelvin = inputKelvin.value;

  // Celsius is 273 degrees less than Kelvin
  const celsius = kelvin - 273;

  console.log(
    `The temperature of ${kelvin} degrees Kelvin is ${celsius} degrees Celsius.`
  );
});

// //use formula: Fahrenheit = Celsius * (9/5) + 32
// // use <let> to change variable's value later
// let fahrenheit = celsius * (9 / 5) + 32;
// // round down
// fahrenheit = Math.floor(fahrenheit);

// let newton = celsius * (33 / 100);
// newton = Math.floor(newton);

// console.log(
//   `The temperature of ${kelvin} degrees Kelvin is ${fahrenheit} degrees Fahrenheit.`
// );

// console.log(
//   `The temperature of ${kelvin} degrees Kelvin is ${newton} degrees Newton.`
// );
