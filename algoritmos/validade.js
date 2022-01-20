/*
  * A descrição do desafio estava muito confusa, dado que
  * não explicava de forma clara qual deveria ser o retorno
  * da função ou seu significado, então a função que escrevi
  * abaixo retorna os seguintes valores com os seguintes significados:
  *
  * true: Está vencido
  * false: Não está vencido
   
  * A resolução deste desafio considera o vencimento 
  * no escopo de dias
*/



const MS_POR_DIA = 1000 * 3600 * 24;

const checarValidade = (data, vencimento) => {
  const sufixoTemporal = vencimento.length - 1;
  const vencimentoEm = vencimento[sufixoTemporal];
  const sufixos = ["d", "s", "m", "a"];
  const temSufixo = sufixos.some(sufixo => sufixo === vencimentoEm);
  
  
  if (temSufixo) {
    vencimento = Number(vencimento.slice(0, sufixoTemporal));
  }

  switch(vencimentoEm) {
    case "s":
      // Semana
      vencimento = vencimento * 7;
      break;
    
    case "m":
      // Mês
      vencimento = vencimento * 30;
      break;
      
      case "a":
        // Ano
        vencimento = vencimento * 365;
      break;

    default:
      // Dia (Padrão)
      vencimento = Number(vencimento);
  }

  const fabricadoEm = new Date(data);
  const dataAtual = new Date();

  const diferencaEmDias = Math.round((dataAtual - fabricadoEm) / MS_POR_DIA);
  const estaVencido = vencimento - diferencaEmDias < 0;
  
  console.log(estaVencido); 

}

// checarValidade("2022, 1, 1", "17d");

checarValidade("2021-11-17T20:40:09.503Z", "10d");
checarValidade("2021-12-10T00:00:00.000Z", "180d");