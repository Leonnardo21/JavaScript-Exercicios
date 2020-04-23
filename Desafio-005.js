const formatarValorDecimal = (valorEmReais) => {
    valorEmReais = `R$ ${valorEmReais.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)