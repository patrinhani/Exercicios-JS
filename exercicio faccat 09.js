// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 

let salario = parseFloat(prompt("Digite seu salario atual:"))

let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"))
let salario_reajuste = salario + (reajuste * salario)/(100) 

alert("O novo salário é de R$ " + salario_reajuste)