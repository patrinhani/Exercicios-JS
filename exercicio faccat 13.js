//Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:

//================Entradas e Saidas================
let nota_01 = parseFloat(prompt("Digite a primeira nota: "));
let nota_02 = parseFloat(prompt("Digite a segunda nota: "));
let nota_03 = parseFloat(prompt("Digite a terceira nota: "));

//================contas================
let nota_final = ((nota_1 * 2) + (nota_2 * 3) + (nota_3 * 5)) / 10;

//================Resultado================
alert("Sua  media final é: ", nota_final);


