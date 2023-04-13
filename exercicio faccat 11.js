//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  comissão  também  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. Escrever um algoritmo que leia o número de  carros por  ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

//================Entradas e Saidas================
let salario_fixo = parseFloat(prompt("Seu salario é de: "));
let valor_do_carro = parseFloat(prompt("Qual o valor do carro vendido: "));
let carros_vendidos = parseFloat(prompt("Quantos carros você vendeu:"));

//================contas================
let comissao1 = (5 / 100) * valor_do_carro;
let comissao = comissao1 * carros_vendidos;
let salario_total = salario_fixo + comissao;

//================Resultado================

alert(
  "Sua comissão é de: " + comissao + " Seu salario total é de: " + salario_total);