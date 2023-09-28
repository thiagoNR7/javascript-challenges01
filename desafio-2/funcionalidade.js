const readline = require("readline");
const palavrasValidas = [];
let contador = 0;
function RegisterInputData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question("Digite a palavra e tecle Enter:", (input) => {
      rl.close();
      resolve(input);
    });
  });
}
function ProcessInputData(palavra) {
  if (palavra.includes(Number)) {
    palavrasValidas.push(palavra);
    contador++;
    return false;
  }
  if (palavra.includes("@,#,!")) {
    return false;
  }
  if (palavra.length <= 4) {
    return false;
  
  }
  return true;
}


async function main() {
  const palavraDigitada = await RegisterInputData();

  if (ProcessInputData(palavraDigitada)) {
    console.log(
      `A sua palavra  tem ${palavraDigitada.length} caracteres e foi  registrada:`, palavraDigitada
    );
  } else {
    console.log(
      ` ${palavraDigitada} A palavra digitada não é valida. Verifique e tente novamente!:`, palavraDigitada
    );
  }
}
main();
