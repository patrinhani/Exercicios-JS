
// ler a idade da pessoa em anos, meses e dias
let anos = parseInt(prompt("Digite a idade em anos: "));
let meses = parseInt(prompt("Digite quanto tempo faz desdo seu ultimo aniversario: "));
let dias = parseInt(prompt("Digite Quanto dias faz desdo seu ultimo  mesversario: "));

// calcular a idade em dias
let idadeDias = anos * 365 + meses * 30 + dias;

// exibir a idade em dias
alert(`A idade dessa pessoa em dias é ${idadeDias} dias.`);