function readFormula(Arquivo){
  
}
/*
...
*/
let specok = checkProblemSpecification(text, clauses, variables);

checkProblemSpecification function (text,clauses, variables){
  //Aqui só checa se os parâmetros batem. Se o texto for vazio ou não bater os parâmetros, retorna false.
  var checklist = [];
  if (text.length == 0){
    return false;
  }else{
    for(let i = 0, espaco=0, frase = 0; i<text.length;i++){
      espaco= test [i];
      if (espaco == 0){
        frase++;
      }else{
        for (let a = 0; a <= checklist.length;a++){
          if (espaco != checklist.length[a]){
            continue;
          }else if(espaco == checklist.length[a]){
            break;
          }else{
            checklist.push(espaco);
          }
        }
      }

    }
    if (frase == clauses && checklist.lengh == variables){
      return true;
    }else{
      return false;
    }
  }
}
