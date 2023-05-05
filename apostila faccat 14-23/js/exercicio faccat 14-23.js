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
