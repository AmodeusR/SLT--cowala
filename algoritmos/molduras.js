const criarMoldura = (linhas, colunas) => {
  if (linhas < 1 || colunas < 1 ) {
    console.log("O número precisa ser maior que 0");
    return null;
  }

  const estenderEspaco = linhas > 2 ? " ".repeat(linhas - 2) : "";

  console.log(`Moldura ${linhas}/${colunas}:`);
  for(let i = 0; i < colunas; i++) {
    if (i === 0 || i === colunas - 1) {
      console.log(`${criarLinhas(linhas, colunas, i)}`);
    } else if (!(i === colunas - 1)) {
      console.log(`${criarColunas(linhas)}`);
    }

  }

}

criarMoldura(1, 1);
criarMoldura(1, 3);
criarMoldura(5, 5);
criarMoldura(8, 8);


function criarLinhas(linhas, colunas, indice) {
  const criarInicioEFim = indice === 0 || indice === colunas - 1 ? "+" : "";
  const estenderLinha = linhas > 2 ? "-".repeat(linhas - 2) : "";
  const linhasFinal = `${criarInicioEFim}${estenderLinha}${linhas !== 1 ? criarInicioEFim : ""}`

  return linhasFinal;
}

function criarColunas (linhas) {
  colunasFinal = `-${" ".repeat(linhas === 1 ? 0 : linhas - 2)}${linhas > 1 ? "-" : ""}`

  return colunasFinal;
}