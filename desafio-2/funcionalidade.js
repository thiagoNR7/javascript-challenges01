const readline = require("readline");

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
  if (palavra.includes(Number)){
    return false;
  }
  if (palavra.includes('@,#,!')) {
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
    console.log("A palavra digitada foi:", palavraDigitada);
  } else {
    console.log("A palavra digitada não é valida:", palavraDigitada);
  }
}
main();
