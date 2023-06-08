function divisao() {
  let x = parseFloat(prompt("Digite um numero"));
  let y = parseFloat(prompt("Digite um numero"));
  let z = x / y;

  alert(x + "/" + y + "=" + z);
}

function soma() {
  let x = parseInt(prompt("Digite um numero"));
  let y = parseInt(prompt("Digite um numero"));
  let z = x + y;

  alert(x + "+" + y + "=" + z);
}

function subtracao() {
  let x = parseInt(prompt("Digite um numero"));
  let y = parseInt(prompt("Digite um numero"));
  let z = x - y;

  alert(x + "-" + y + "=" + z);
}

function multiplicacao() {
  let x = parseInt(prompt("Digite um numero"));
  let y = parseInt(prompt("Digite um numero"));
  let z = x * y;

  alert(x + "*" + y + "=" + z);
}

//==============5==============
function numeroAntecessor() {
  let numero = parseInt(prompt("Digite um número :"));

  let antecessor = numero - 1;

  alert("O número antecessor do " + numero + " digitado foi: " + antecessor);
}
//==============6==============
function areaTriangulo() {
  let base = parseInt(prompt("Qual a base do triangulo: "));
  let altura = parseInt(prompt("Qual a altura do triangulo:"));
  let resultado = (base * altura) / 2;
  alert("A area do triangulo: " + resultado);
}
//==============7==============
function idadeEmDias() {
  let anos = parseInt(prompt("Digite a idade em anos: "));
  let meses = parseInt(
    prompt("Digite quanto tempo faz desdo seu ultimo aniversario: ")
  );
  let dias = parseInt(
    prompt("Digite Quanto dias faz desdo seu ultimo  mesversario: ")
  );

  let idadeDias = anos * 365 + meses * 30 + dias;

  alert(`A idade dessa pessoa em dias é ${idadeDias} dias.`);
}
//==============8==============
function votosB_N_V() {
  let eleitores = parseInt(prompt("Digite o número total de eleitores: "));
  let votosBrancos = parseInt(prompt("Digite o número de votos em branco: "));
  let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
  let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

  let percentualBrancos = (votosBrancos / eleitores) * 100;
  let percentualNulos = (votosNulos / eleitores) * 100;
  let percentualValidos = (votosValidos / eleitores) * 100;

  alert(`Percentual de votos em branco: ${percentualBrancos}%`);
  alert(`Percentual de votos nulos: ${percentualNulos}%`);
  alert(`Percentual de votos válidos: ${percentualValidos}%`);
}
//==============9==============
function percentualDeAjusteSalario() {
  let salario = parseFloat(prompt("Digite seu salario atual:"));

  let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"));
  let salario_reajuste = salario + (reajuste * salario) / 100;

  alert("O novo salário é de R$ " + salario_reajuste);
}
//==============10==============
function custoCarroNovoConsumidor() {
  let valor_do_carro = parseFloat(
    prompt("Digita o valor de fabrica do carro:")
  );
  let impostos = (valor_do_carro * 73) / 100;
  let resultado = valor_do_carro + impostos;

  alert(
    "Os impostos sobre esse carro são de: " +
      impostos +
      " O custo final ao consumidor é de:" +
      resultado
  );
}
//==============11==============
function comissaoESalariofixoVendCarro() {
  let salario_fixo = parseFloat(prompt("Seu salario é de: "));
  let valor_do_carro = parseFloat(prompt("Qual o valor do carro vendido: "));
  let carros_vendidos = parseFloat(prompt("Quantos carros você vendeu:"));

  let comissao1 = (5 / 100) * valor_do_carro;
  let comissao = comissao1 * carros_vendidos;
  let salario_total = salario_fixo + comissao;

  alert(
    "Sua comissão é de: " +
      comissao +
      " Seu salario total é de: " +
      salario_total
  );
}
//==============12==============
function conversaoFparaC() {
  let fahrenheit = parseFloat(prompt("Digite o valor em Fahrenheit:"));
  let c = (fahrenheit - 32) * (5 / 9);
  alert(fahrenheit + "F convertidos para Graus é:" + c);
}
//==============13==============
function mediaFinal() {
  let nota_1 = parseFloat(prompt("Digite a primeira nota: "));
  let nota_2 = parseFloat(prompt("Digite a segunda nota: "));
  let nota_3 = parseFloat(prompt("Digite a terceira nota: "));

  let nota_final = (nota_1 * 2 + nota_2 * 3 + nota_3 * 5) / 10;

  alert("Sua  media final é: ", nota_final);
}
//==============14==============
function verificaValor() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > 10) {
    alert("É MAIOR QUE 10!");
  } else if (valor == 10) {
    alert("É IGUAL QUE 10!");
  } else {
    alert("NÃO É MAIOR QUE 10!");
  }
}
//==============15==============
function positivoOuNegativo() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor >= 0) {
    alert("O valor é positivo.");
  } else {
    alert("O valor é negativo.");
  }
}
//==============16==============
function maca() {
  let quantidade = Number(prompt("Digite o número de maçãs compradas:"));

  let preco;

  if (quantidade < 12) {
    preco = 1.3;
  } else {
    preco = 1;
  }

  let custoTotal = quantidade * preco;

  alert("O custo total da compra é de: R$" + custoTotal);
}
//==============17==============
function mediaAritmetica() {
  let nota1 = Number(prompt("Digite a nota da 1ª avaliação:"));
  let nota2 = Number(prompt("Digite a nota da 2ª avaliação:"));

  let media = (nota1 + nota2) / 2;

  alert("A média do aluno é ." + media);

  if (media >= 6) {
    alert("O aluno foi aprovado.");
  } else {
    alert("O aluno não foi aprovado.");
  }
}
//==============18==============
function podeOuNaoVotar() {
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite o ano de nascimento:"));

  let idade = anoAtual - anoNascimento;

  if (idade >= 16) {
    alert("Você pode votar este ano.");
  } else {
    alert("Você não pode votar este ano.");
  }
}
//==============19==============
function escreveOMaiorNumero() {
  let valor1 = Number(prompt("Digite o primeiro valor:"));
  let valor2 = Number(prompt("Digite o segundo valor:"));

  if (valor1 > valor2) {
    alert("O primeiro valor é maior: " + valor1);
  } else {
    alert("O segundo valor é maior: " + valor2);
  }
}
//==============20==============
function escreveNumerosEmOrdemCresente() {
  let valor1 = Number(prompt("Digite o primeiro valor:"));
  let valor2 = Number(prompt("Digite o segundo valor:"));

  if (valor1 < valor2) {
    alert(
      valor1 +
        " é menor que " +
        valor2 +
        ", então a ordem crescente é: " +
        valor1 +
        ", " +
        valor2
    );
  } else {
    alert(
      valor1 +
        " é maior que " +
        valor2 +
        ", então a ordem crescente é: " +
        valor2 +
        ", " +
        valor1
    );
  }
}
//==============21==============
function xadrezTempo() {
  let horaInicio = Number(
    prompt("Digite a hora de início do jogo (somente o valor inteiro):")
  );
  let horaFim = Number(
    prompt("Digite a hora de fim do jogo (somente o valor inteiro):")
  );

  let duracao = 0;

  if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = 24 - horaInicio + horaFim;
  }

  alert("A duração do jogo foi de " + duracao + " horas.");
}
//==============22==============
function jornada40hrs() {
  let horasTrabalhadas = Number(
    prompt("Digite o número de horas trabalhadas no mês:")
  );
  let salarioHora = Number(prompt("Digite o salário por hora:"));

  const HORAS_SEMANAIS = 40;
  const SEMANAS_MES = 4;
  let salarioTotal;

  if (horasTrabalhadas <= HORAS_SEMANAIS * SEMANAS_MES) {
    salarioTotal = horasTrabalhadas * salarioHora;
  } else {
    let horasExtras = horasTrabalhadas - HORAS_SEMANAIS * SEMANAS_MES;
    salarioTotal =
      HORAS_SEMANAIS * SEMANAS_MES * salarioHora +
      horasExtras * (salarioHora * 1.5);
  }

  alert("O salário total do funcionário é de: R$" + salarioTotal);
}
//==============23==============
function pesoIdeal() {
  let nome = prompt("Digite seu nome:");
  let sexo = prompt("Digite seu sexo (M/F):");
  let altura = Number(prompt("Digite sua altura em metros:"));

  if (sexo.toUpperCase() === "M") {
    let peso_ideal = 72.7 * altura - 58;
    alert(nome + "seu peso ideal é" + peso_ideal + " kg.");
  } else {
    let peso_ideal = 62.1 * altura - 44.7;
    alert(nome + "seu peso ideal é" + peso_ideal + " kg.");
  }
}
//==============24==============
function salarioComComissao() {
  let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
  let valorVendas = parseFloat(
    prompt("Digite o valor total das vendas efetuadas: ")
  );

  let comissao = 0;
  let salarioFinal = 0;

  if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
  } else {
    comissao = 1500 * 0.03 + (valorVendas - 1500) * 0.05;
  }

  salarioFinal = salarioFixo + comissao;

  alert("Seu salário é de: R$ " + salarioFinal.toFixed(2));
}
//==============25==============
function saldoCliente() {
  let saldo = parseFloat(prompt("Digite seu Saldo: "));
  let debito = parseFloat(prompt("Digite seu Debito disponivel: "));
  let credito = parseFloat(prompt("Digite seu Credito disponivel: "));
  let saldoAtual = saldo - debito + credito;
  if (saldoAtual >= 0) {
    alert("Seu saldo é positivo: $" + saldoAtual);
  } else {
    alert("Seu saldo é negativo: $" + saldoAtual);
  }
}
//==============26==============
function verificarCompra() {
  let quantidadeAtual = parseFloat(
    prompt("Digite a quantidade atual em estoque:")
  );
  let quantidadeMaxima = parseFloat(
    prompt("Digite a quantidade máxima em estoque:")
  );
  let quantidadeMinima = parseFloat(
    prompt("Digite a quantidade mínima em estoque:")
  );

  let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

  if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
  } else {
    alert("Efetuar compra");
  }
}
//==============27==============
function verificarValor() {
  let valor = parseFloat(prompt("Digite um valor:"));

  if (valor > 0) {
    alert("Valor digitado é positivo");
  } else if (valor === 0) {
    alert("Valor digitado é neutro (zero)");
  } else {
    alert("Valor digitado é negativo");
  }
}
//==============28==============
function encontrarMaiorValor() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

  let maiorValor = valor1;

  if (valor2 > maiorValor) {
    maiorValor = valor2;
  }

  if (valor3 > maiorValor) {
    maiorValor = valor3;
  }

  alert("O maior valor é: " + maiorValor);
}

//==============29==============
function calcularSomaDosDoisMaiores() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

  let soma = 0;

  if (valor1 > valor2 && valor1 > valor3) {
    soma = valor1;
    if (valor2 > valor3) {
      soma += valor2;
    } else {
      soma += valor3;
    }
  } else if (valor2 > valor1 && valor2 > valor3) {
    soma = valor2;
    if (valor1 > valor3) {
      soma += valor1;
    } else {
      soma += valor3;
    }
  } else {
    soma = valor3;
    if (valor1 > valor2) {
      soma += valor1;
    } else {
      soma += valor2;
    }
  }

  alert("A soma dos dois maiores valores é: " + soma);
}
//==============30==============
function escreverOrdemCrescente() {
  let valor1 = parseFloat(prompt("Digite o primeiro número: "));

  let valor2 = parseFloat(prompt("Digite o segundo número: "));

  let valor3 = parseFloat(prompt("Digite o terceiro número: "));

  let menor, meio, maior;

  if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
      meio = valor2;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor2;
    }
  } else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
      meio = valor1;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor1;
    }
  } else {
    menor = valor3;
    if (valor1 < valor2) {
      meio = valor1;
      maior = valor2;
    } else {
      meio = valor2;
      maior = valor1;
    }
  }

  alert("Valores em ordem crescente: " + menor + ", " + meio + ", " + maior);
}
//==============31==============
function verificarTriangulo() {
  alert("Digite as medidas dos lados do triângulo:");
  let ladoA = parseFloat(prompt("Lado A:"));
  let ladoB = parseFloat(prompt("Lado B:"));
  let ladoC = parseFloat(prompt("Lado C:"));

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("Forma um triângulo.");
  } else {
    alert("Não forma um triângulo.");
  }
}
//==============32==============
function determinarVencedor() {
  alert("Informe os dados da partida:");
  let time1 = prompt("Nome do time 1:");
  let golsTime1 = parseInt(prompt("Número de gols do time 1:"));
  let time2 = prompt("Nome do time 2:");
  let golsTime2 = parseInt(prompt("Número de gols do time 2:"));

  if (golsTime1 > golsTime2) {
    alert("Vencedor: " + time1);
  } else if (golsTime2 > golsTime1) {
    alert("Vencedor: " + time2);
  } else {
    alert("EMPATE");
  }
}
//==============33==============
function compararValores() {
  alert("Digite dois valores:");
  let valor1 = parseFloat(prompt("Primeiro valor:"));
  let valor2 = parseFloat(prompt("Segundo valor:"));

  if (valor1 === valor2) {
    alert("Números iguais");
  } else if (valor1 > valor2) {
    alert("Primeiro é maior");
  } else {
    alert("Segundo é maior");
  }
}
//==============34==============
function calcularZ() {
  alert("Digite dois valores:");
  let x = parseFloat(prompt("Valor de x:"));
  let y = parseFloat(prompt("Valor de y:"));

  let z = x * y + 5;
  let resposta;

  if (z <= 0) {
    resposta = "A";
  } else if (z <= 100) {
    resposta = "B";
  } else {
    resposta = "C";
  }

  alert("z: " + z + ", resposta: " + resposta);
}

//==============35==============
function combustivelAouG() {
  alert("Qual tipo de combustível você deseja?");
  alert("(01 Álcool ou 02 Gasolina):");
  let combustivel = prompt("Digite o código do combustível:");

  switch (combustivel) {
    case "01":
      alert("Quantos litros de álcool você deseja (R$ 2,90/L):");
      let litrosAlcool = parseFloat(
        prompt("Digite a quantidade de litros de álcool:")
      );

      if (litrosAlcool <= 20) {
        let valorTotal = 2.9 * litrosAlcool * 0.97;
        alert("Você vai gastar: R$" + valorTotal);
      } else {
        let valorTotal = 2.9 * litrosAlcool * 0.95;
        alert("Você vai gastar: R$" + valorTotal);
      }

      break;

    case "02":
      alert("Quantos litros de gasolina você deseja (R$ 3,30/L):");
      let litrosGasolina = parseFloat(
        prompt("Digite a quantidade de litros de gasolina:")
      );

      if (litrosGasolina <= 20) {
        let valorTotal = 3.3 * litrosGasolina * 0.96;
        alert("Você vai gastar: R$" + valorTotal);
      } else {
        let valorTotal = 3.3 * litrosGasolina * 0.94;
        alert("Você vai gastar: R$" + valorTotal);
      }

      break;

    default:
      alert("Opção de combustível inválida.");
      break;
  }
}
//==============36==============
function calcularIdades() {
  alert("Digite as idades de 2 homens e 2 mulheres:");

  // Leitura das idades dos homens
  let homem1 = parseFloat(prompt("Idade do primeiro homem:"));
  let homem2 = parseFloat(prompt("Idade do segundo homem:"));

  // Leitura das idades das mulheres
  let mulher1 = parseFloat(prompt("Idade da primeira mulher:"));
  let mulher2 = parseFloat(prompt("Idade da segunda mulher:"));

  let homemMaisVelho = Math.max(homem1, homem2);
  let homemMaisNovo = Math.min(homem1, homem2);
  let mulherMaisVelha = Math.max(mulher1, mulher2);
  let mulherMaisNova = Math.min(mulher1, mulher2);

  let somaIdades = homemMaisVelho + mulherMaisNova;
  let produtoIdades = homemMaisNovo * mulherMaisVelha;

  alert(
    "A soma das idades do homem mais velho com a mulher mais nova é: " +
      somaIdades
  );
  alert(
    "O produto das idades do homem mais novo com a mulher mais velha é: " +
      produtoIdades
  );
}

//==============37==============
function calcularValorPago() {
  alert("Digite a quantidade (em Kg) de morangos e maçãs adquiridas:");

  let quantidadeMorangos = parseFloat(
    prompt("Quantidade de morangos (em Kg):")
  );
  let quantidadeMacas = parseFloat(prompt("Quantidade de maçãs (em Kg):"));

  let precoMorangos = 0;
  if (quantidadeMorangos <= 5) {
    precoMorangos = quantidadeMorangos * 2.5;
  } else {
    precoMorangos = quantidadeMorangos * 2.2;
  }

  let precoMacas = 0;
  if (quantidadeMacas <= 5) {
    precoMacas = quantidadeMacas * 1.8;
  } else {
    precoMacas = quantidadeMacas * 1.5;
  }

  let valorTotal = precoMorangos + precoMacas;

  if (quantidadeMorangos + quantidadeMacas > 8 || valorTotal > 25) {
    valorTotal *= 0.9;
  }

  alert("Valor a ser pago pelo cliente: R$" + valorTotal.toFixed(2));
}

//==============38==============
function verificarAcesso() {
  alert("Digite o código de usuário:");
  let codigoUsuario = prompt("Código de usuário:");

  if (codigoUsuario !== "1234") {
    alert("Usuário inválido!");
  } else {
    alert("Digite a senha:");
    let senha = prompt("Senha:");

    if (senha !== "9999") {
      alert("Senha incorreta!");
    } else {
      alert("Acesso permitido");
    }
  }
}
//==============44==============
function segundoValorNaoPodeSerZero() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  let valor2 = parseFloat(
    prompt("Digite o segundo valor (diferente de zero):")
  );

  while (valor2 === 0) {
    valor2 = parseFloat(
      prompt("Valor inválido! Digite o segundo valor (diferente de zero):")
    );
  }

  let resultado = valor1 / valor2;
  alert("Resultado da divisão:", resultado.toFixed(2));
}
//==============45==============
function ex45() {
 
    let valor1, valor2, resultado;
  
    do {
      valor1 = parseFloat(prompt("Digite o primeiro valor:"));
      valor2 = parseFloat(prompt("Digite o segundo valor (diferente de zero):"));
      if (valor2 === 0) {
        alert("Valor inválido! O segundo valor não pode ser zero.");
      }
    } while (valor2 === 0);
  
    resultado = valor1 / valor2;
    alert("Resultado da divisão: " + resultado.toFixed(2));
  }
  
 
//==============46==============
function ex46() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  let valor2 = parseFloat(
    prompt("Digite o segundo valor (diferente de zero):")
  );

  while (valor2 === 0) {
    alert("VALOR INVÁLIDO");
    valor2 = parseFloat(prompt("Digite o segundo valor (diferente de zero):"));
  }

  let resultado = valor1 / valor2;
  alert("Resultado da divisão: " + resultado.toFixed(2));
}
//==============47==============
function ex47() {
 
    let valor1, valor2, resultado;
  
    do {
      valor1 = parseFloat(prompt("Digite o primeiro valor:"));
      valor2 = parseFloat(prompt("Digite o segundo valor (diferente de zero):"));
      
      if (valor2 === 0) {
        alert("VALOR INVÁLIDO! O segundo valor não pode ser zero.");
      }
    } while (valor2 === 0);
  
    resultado = valor1 / valor2;
    alert("Resultado da divisão: " + resultado.toFixed(2));
  }
  

  
//==============48==============
function calcularMedia() {
  let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
  let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));

  while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    alert("Nota inválida! Digite novamente.");
    nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
    nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));
  }

  let media = (nota1 + nota2) / 2;
  alert("Média do aluno: " + media.toFixed(2));
}

//==============49==============
function calcularMediaRepeticao() {
  let resposta = "S";

  while (resposta === "S") {
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));

    while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
      alert("Nota inválida! Digite novamente.");
      nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
      nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));
    }

    let media = (nota1 + nota2) / 2;
    alert("Média do aluno: " + media);
  }
}

// 50) Imprimir os números de 1 a 10 em ordem crescente
function imprimirNumerosCrescente() {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += i + "\n";
  }
  alert(resultado);
}

// 51) Imprimir os números de 1 a 10 em ordem decrescente
function imprimirNumerosDecrescente() {
  let resultado = "";
  for (let i = 10; i >= 1; i--) {
    resultado += i + "\n";
  }
  alert(resultado);
}

// 52) Imprimir os 10 primeiros números inteiros maiores que 100
function imprimirNumerosMaioresQue100() {
  let resultado = "";
  for (let i = 101; i <= 110; i++) {
    resultado += i + "\n";
  }
  alert(resultado);
}

// 53) Imprimir todos os valores inteiros entre 1 e N (inclusive)
function imprimirValoresAteN(N) {
  let resultado = "";
  for (let i = 1; i <= N; i++) {
    resultado += i + "\n";
  }
  alert(resultado);
}

// 54) Ler um valor N válido e imprimir todos os valores inteiros entre 1 e N (inclusive)
function imprimirValoresAteNValido() {
  let N = parseInt(prompt("Digite um valor N maior que 0:"));

  while (N <= 0) {
    N = parseInt(prompt("Valor inválido! Digite um valor N maior que 0:"));
  }

  let resultado = "";
  for (let i = 1; i <= N; i++) {
    resultado += i + "\n";
  }
  alert(resultado);
}

// 55) Calcular e imprimir a tabuada do 8 (1 a 10)
function calcularTabuadaDo8() {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    let multiplicacao = 8 * i;
    resultado += "8 x " + i + " = " + multiplicacao + "\n";
  }
  alert(resultado);
}

// 56) Ler um valor inteiro entre 1 e 10 e imprimir a tabuada desse valor (1 a 10)
function calcularTabuadaPersonalizada() {
  let valor = parseInt(
    prompt("Digite um valor inteiro entre 1 e 10 para a tabuada:")
  );

  while (valor < 1 || valor > 10) {
    valor = parseInt(
      prompt("Valor inválido! Digite um valor entre 1 e 10 para a tabuada:")
    );
  }

  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    let multiplicacao = valor * i;
    resultado += valor + " x " + i + " = " + multiplicacao + "\n";
  }
  alert(resultado);
}
