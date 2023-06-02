// Pg 46 exercicios A - K

// ================= A =================

// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer

function tabuada() {
  let multiplicando = Number(prompt("Qual tabuada deseja? "));

  let contadora = 1;

  while (contadora <= 10) {
    const resultado = multiplicando * contadora;
    console.log(multiplicando + " x " + contadora + " = " + resultado + "<br>");
    contadora++;
  }
}

// ================= B =================

//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
function somanumerosinteitos() {
  let soma = 0;

  let contadora = 1;

  while (contadora < 101) {
    soma = Number(soma + contadora);

    contadora++;
  }
  console.log(soma);
}

// ================= C =================

//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
// 1 até 500.

function somapares() {
  let soma = 0;
  let i = 1;
  while (i <= 500) {
    if (i % 2 == 0) {
      soma += i;
    }
    i++;
  }
  console.log(soma);
}

// ================= D =================

// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.

function impares() {
  let i = 0;
  while (i <= 20) {
    if (i % 2 != 0) {
      console.log(i);
    }
    i++;
  }
}

// ================= E =================

// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

function potencia3() {
  let i = 0;
  let potencia = 1;
  while (i <= 15) {
    console.log(`3 elevado a ${i} é ${potencia}`);
    potencia *= 3;
    i++;
  }
}

// ================= F =================

// Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
// portuguol (^).

function potencianumerodigitado() {
  let base = Number(prompt("Digite o valor da base:"));
  let expoente = Number(prompt("Digite o valor do expoente:"));
  let resultado = 1;
  let i = 1;
  while (i <= expoente) {
    resultado *= base;
    i++;
  }
  console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`);
}

// ================= G =================

// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
// Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
// pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
// é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

function fibonacci() {
  let termo = 1;
  let anterior = 1;
  let proximo = 1;
  let i = 2;
  while (i <= 50) {
    console.log(termo);
    termo = anterior + proximo;
    anterior = proximo;
    proximo = termo;
    i++;
  }
}

// ================= H =================

// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
// é
// 5
// 9 +160
// =
// C
// F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

function conversao() {
  let celsius = 10;
  while (celsius <= 100) {
    let fahrenheit = (9 * celsius) / 5 + 32;
    console.log(celsius + "°C = " + fahrenheit + "°F");
    celsius += 10;
  }
}

// ================= I =================

// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
// somatório e a média aritmética dos valores lidos.

function somar() {
  let total = 0;
  let media = 0;
  let contador = 0;

  while (contador < 10) {
    let valor = Number(prompt(`Digite o ${contador + 1}º valor:`));
    total += valor;
    contador++;
  }

  media = total / contador;

  console.log(
    `O total do somatório é ${total} e a média aritmética é ${media}`
  );
}

// ================= J =================

//  Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
// pares situados na faixa numérica de 50 a 70.

function mediaPares() {
  let numero = 50;
  let acumuladora = 0;
  let pares = 0;
  while (numero < 71) {
    if (numero % 2 == 0) {
      acumuladora = acumuladora + numero;
      pares += 1;
    }
    numero++;
  }
  let media = acumuladora / pares;
  console.log(
    "Esses são os números pares: " +
      pares +
      " Esse é o resultado da soma: " +
      media
  );
}

// ================= K =================
// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//   banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//   nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
// calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
// total acumulado da área residencial.

function comodos() {
  let areaTotal = 0;
  while (true) {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = Number(prompt("Digite a largura do cômodo em metros:"));
    let comprimento = Number(
      prompt("Digite o comprimento do cômodo em metros:")
    );
    let area = largura * comprimento;
    alert(`A área do cômodo ${nome} é ${area} metros quadrados.`);
    areaTotal += area;
    let continuar = prompt(
      "Deseja calcular a área de mais um cômodo? Digite SIM ou NAO."
    );
    if (continuar.toUpperCase() !== "SIM") {
      break;
    }
  }
  alert(`A área total da residência é ${areaTotal} metros quadrados.`);
}
