let stringPontuacao = '10, 20, 20, 8, 25, 3, 0, 30, 1';

const avaliaPontuacao = (stringPontuacao) => {
  let pontuacao = stringPontuacao.split(', ');
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacao[0];
  let menorPontuacao = pontuacao[0];

  for (let i = 1; i < pontuacao.length; i++) {
    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao[i];
      qtdQuebraRecordes++;
    } else if (pontuacao < menorPontuacao) {
      menorPontuacao = pontuacao[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraRecordes, piorJogo]
}

console.log(avaliaPontuacao(stringPontuacao));