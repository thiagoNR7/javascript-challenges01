function Main() {
  const city1 = "Nova Iorque";
  const city2 = "Nantes ";
  const city3 = "Tóquio";
  const city4 = "Londres";
  const city5 = "Sydney";

  const cities = Array(5);

  cities[0] = city1;
  cities[1] = city2;
  cities[2] = city3;
  cities[3] = city4;
  cities[4] = city5;

  function CompleteIterate() {
    for (let i = 0; i < cities.length; i++) {
      console.log(cities[i]);
    }
  }

  function IterateByLetter(startLetter) {
    let count = 0;
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].charAt(0).toLowerCase() === startLetter.toLowerCase()) {
        console.log(cities[i]);
        count++;
      }
    }
    console.log(`Número de cidades que começam com "${startLetter}": ${count}`);
  }

  CompleteIterate();

  
  IterateByLetter("N");
}


Main();

// 1 - Criar uma função chamada Main
// 2 - Declarar dentro desta função 5 váriaveis com nomes de cidades do mundo cada uma delas
// 3 - Declarar um array com o nome de cities com tamanho 5 já pré-definido
// 4 - Salvar cada uma das váriaveis dentro do array quue foi criado no passo 3
// 5 - Criar uma função chamada CompleteIterate() que var iterar no array e mostrar um console log para cada um dos itens criados
// 6 - Criar uma função chamada IterateByLetter(startLetter) que vai receber como parâmetro uma letra e mostrar apenas no console log as cidades que começam com a letra recebida no parametro juntamente do número de cidades encontradas:

// 1 - Criar uma função chamada Main
