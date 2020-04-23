const division = (dividendo, divisor) => {
  let result = Math.floor(dividendo / divisor);
  console.log("Resultado: " + result);
  console.log("Resto: " + dividendo % divisor);

}

division(11, 4);

function divisao(dividendo, divisor) {
  console.log("Resultado: " + Math.floor(dividendo / divisor));
  console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)