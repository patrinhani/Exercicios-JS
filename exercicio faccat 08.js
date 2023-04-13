// ler o número total de eleitores, votos brancos, nulos e válidos
let eleitores = parseInt(prompt("Digite o número total de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o número de votos em branco: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

// calcular o percentual de cada tipo de voto em relação ao total de eleitores
let percentualBrancos = (votosBrancos / eleitores) * 100;
let percentualNulos = (votosNulos / eleitores) * 100;
let percentualValidos = (votosValidos / eleitores) * 100;

// exibir os percentuais
alert(`Percentual de votos em branco: ${percentualBrancos}%`);
alert(`Percentual de votos nulos: ${percentualNulos}%`);
alert(`Percentual de votos válidos: ${percentualValidos}%`);