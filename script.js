const readLine = require('readline-sync');

console.log('A pricação de Jauros:');

let valor = readLine.question('Informe o valor devido; R$ ');
const valorBoleto = Number(valor);
if (valorBoleto<=0){
    console.log('O valor da dívida deve ser maior que zero');
    return
};
let dias = readLine.question('Informe quados dias se passaram desde o vencimendo do boleto: ');
const vencimento = Number(dias);
if (vencimento<=0){
    console.log('Você esta em dia!');
    return 
};
console.log(`Valor original da dívida: R$ ${valorBoleto.toFixed(2)}`);
console.log(`Dias atrasados: ${vencimento}`);

let juros;
if (dias > 15){
    juros = valorBoleto * 0.10
    console.log(`Taxa de juros: 10%`);
}
else {
    juros = valorBoleto * 0.05;
    console.log(`Taxa de juros: 5%`);
}

const totalPagar = valorBoleto + juros;
console.log(`Valor total com juros: R$ ${totalPagar.toFixed(2)}`);
