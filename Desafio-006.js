const jurosSimples = (capital, taxa, tempo) => {
    return capital + (capital * taxa * tempo);
}

const jurosComposto = (capital, taxa, tempo) => {
    return capital * (1 + taxa) ** tempo;
}

console.log("Juros Simples: " + jurosSimples(100, 10/100, 2).toFixed(2));
console.log("Juros Composto: " + jurosComposto(100, 10/100, 2).toFixed(2));
