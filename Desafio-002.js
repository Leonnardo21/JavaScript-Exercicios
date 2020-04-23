const typeTriangle = (a, b, c) => {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a == b && b == c) {
      console.log('Triângulo equilátero');
    }
    else if (a == b || a == c || c == b) {
      console.log('Triângulo isóceles');
    }
    else {
      console.log('Triângulo escaleno');
    }
  }
  else {
    console.log('Nenhuma medida foi informada!');
  }

}

typeTriangle(10, 5, 10);
typeTriangle(10, 10, 10);
typeTriangle(3, 4, 5);
typeTriangle();