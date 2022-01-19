/*  
  Dada a dubiedade da proposição da resolução, a primeira delas
  muta o objeto original, enquanto a segunda retorna um novo objeto
  sem as propriedades indesejadas.
*/

// 1ª Solução - Mudando o objeto original

const dummyObj = {
  nome: "Vicente",
  idade: 34,
  endereco: undefined,
  numero: "(11) 94002-8922"
}


const removeValuelessProperties = obj => {
  const objectKeys = Object.keys(obj);
  
  objectKeys.forEach(key => {
    const isNullOrUndefined = obj[key] === null || obj[key] === undefined;
    
    if (isNullOrUndefined) {
      Reflect.deleteProperty(obj, key);
    }
  });
}

removeValuelessProperties(dummyObj);

console.log("Primeira Solução:");
console.log(dummyObj);

console.log("\n");


// 2ª Solução – Sem mudar o objeto original

const dummyObj2 = {
  nome: "Isabel",
  idade: 23,
  endereco: undefined,
  numero: null
}

dummyObj2.filmeFavorito = "Star Wars";


const removeValuelessProperties2 = obj => {
  const objectKeys = Object.keys(obj);
  
  return parsedArray = objectKeys.reduce((acc, key) => {
    const isNotNullOrUndefined = obj[key] !== null && obj[key] !== undefined;
 
    if (isNotNullOrUndefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});

  
}

const result2 = removeValuelessProperties2(dummyObj2);
console.log("Objeto original:");
console.log(dummyObj2);
console.log("Objeto mutado:");
console.log(result2);
