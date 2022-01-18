const orderArray = arr => {
  
  const sortedArr = [...arr].sort((a, b) => {
    const saoAdmins = a.responsavel && b.responsavel
    const MembroNormalENaoSouEu = !a.responsavel && !b.responsavel && !a.souEu && !b.souEu;
    
    if (a.souEu) {
      return -1;
    } else if (a.responsavel && !b.souEu) {
      if (saoAdmins) {
        return (a.nome).localeCompare(b.nome, "pt-br");
      }
      return -1;
    } else if (MembroNormalENaoSouEu) {
      return (a.nome).localeCompare(b.nome, "pt-br");
    }
  });

  return sortedArr;
}


const listOfMembers = [
  {souEu: false, responsavel: false, nome: "Benjamin"},
  {souEu: true, responsavel: false, nome: "Vitória"},
  {souEu: false, responsavel: false, nome: "Lorena"},
  {souEu: false, responsavel: true, nome: "Sara"},
  {souEu: false, responsavel: false, nome: "Meire"},
  {souEu: false, responsavel: true, nome: "Deneval"},
  {souEu: false, responsavel: false, nome: "Henrique"},
  {souEu: false, responsavel: true, nome: "Paula"},
  {souEu: false, responsavel: false, nome: "Lorraine"},
  {souEu: false, responsavel: true, nome: "Roberta"}
]

console.log(listOfMembers);
console.log(orderArray(listOfMembers));