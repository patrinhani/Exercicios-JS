// O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com  a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  escrever  um  algoritmo  para  ler o  custo  de  fábrica  de  um  carro, calcular e escrever o custo final ao consumidor. 

let valor_do_carro = parseFloat(prompt("Digita o valor de fabrica do carro:"))
let impostos = valor_do_carro * 73 / 100
let resultado = valor_do_carro + impostos

alert("Os impostos sobre esse carro são de: " + impostos
+ " O custo final ao consumidor é de:" + resultado)

