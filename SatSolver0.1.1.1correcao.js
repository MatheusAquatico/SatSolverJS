//Começa aqui o projeto
/*
to do:
read variables;
do solve;
*/

exports.solve = function (fileName) {
  let formula = readFormula(fileName)
  let result = doSolve(formula.clauses, formula.variables)
  return result // two fields: isSat and satisfyingAssignment
}

function generateAssigments(variables) {
  let arrayOfAssigments = new Array(variables * variables)(variables);
  for (let x = 0; x < variables * variables; x++) {
    for (let y = 0; y < variables; y++) {
      arrayOfAssigments[x][y] = 0;
    }
  }// Aqui cria um array bidimensional com todos vaalores falsos (0);
  for (let a = 0; x < variables * variables; x++) {
    let add = 0;
    var phrase1 = phrase2;
    for (let b = 0; b < variables; b++) {
      var phrase2 += arrayOfAssigments[a][b];
    }
    while (phrase2.equals(phrase1)) {
      if (phrase2.charAt(add).equals("0")) {
        arrayOfAssigments[a][add] = 1;
        for (let c = 0; b < variables; c++) {
          var phrase2 += arrayOfAssigments[a][c];
        }else {
          arrayOfAssigments[a][add] = 0;
          for (let c = 0; b < variables; c++) {
            var phrase2 += arrayOfAssigments[a][c];
          }
        }
        add++;
      }

      //Eu tinha me esquecido disso :p
    }
  }//Aqui cria as diferentes soluções comparando elas entre si

}
function nextAssignment(currentAssignment, arrayOfAssigments) {
  //Aqui gera uma nova tentativa se a outra não satisfez o problema
  for (let m = 0; m < arrayOfAssigments.length; m++) {
    for (let n = 0; n < arrayOfAssigments[m.length; n++]) {
      if (!array.equals(arrayOfAssigments[m][n])) {
        var newAssignment = arrayOfAssigments[m][n];
        break;
      } else {
        continue;
      }
    }
  }
  return newAssignment
}

function doSolve(clauses, assignment) {
  let isSat = false
  while ((!isSat) && /* must check whether this is the last assignment or not*/) {
    // does this assignment satisfy the formula? If so, make isSat true. 

    // if not, get the next assignment and try again. 
    assignment = nextAssignment(assignment)
  }
  let result = { 'isSat': isSat, satisfyingAssignment: null }
  if (isSat) {
    result.satisfyingAssignment = assignment
  }
  return result
}

// ---------- Ler Arquivo -------------- 
function readFormula(fileName) {

  var fs = require('fs');
  let file = fs.readFileSync(Filename).toString();
  let text = file.split('\n');
  let clauses = readClauses(text)
  let variables = readVariables(clauses)

  let specOk = checkProblemSpecification(text, clauses, variables);
  let result = { 'clauses': [], 'variables': [] };
  if (specOk) {
    result.clauses = clauses;
    result.variables = variables;
  }
  return result;
}

// ---------- Ler Cláusulas -------------
function readclauses(text) {
  let strgClauses = ""; // variável que vai receber as cláusulas como string
  
  for (let u = 0; u<text.length; u++ ){
      if (text[u].charAt(0) !== 'c' && text[u].charAt(0) !== 'p') {
          strgClauses = strgClauses +' '+text[u]; // adiciona as cláusulas a string
      }
  let clauses = [];
  let clausesAux = [];
  clauses = strgClauses.split(' 0');
  clauses.pop();
  for (w = 0; w < clauses.length; w++) {
      clausesAux = clauses[w].split(' ');
      clausesAux.shift();
      for (i = 0; i < clausesAux.length; i++) {
          clausesAux[i] = parseInt(clausesAux[i]); 
      }
      clauses[w] = clausesAux; // o arrayClauses recebe um array bidimensional 
    }								// com todas as clausulas e todas as variáveis num array próprio.
  return clauses;
  }  
      

  let specok = checkProblemSpecification(text, clauses, variables);

  function checkProblemSpecification(text, clauses, variables) {
    //Aqui só checa se os parâmetros batem. Se o texto for vazio ou não bater os parâmetros, retorna false.
    var clauseLength = clauses.length;
    var checklist = [];
    if (text.length == 0) {
      return false;
    } else {
      for (let i = 0, espaco = 0, frase = 0; i < text.length; i++) {
        espaco = test[i];
        if (espaco == 0) {
          frase++;
        } else {
          for (let a = 0; a <= checklist.length; a++) {
            if (espaco != checklist.length[a]) {
              continue;
            } else if (espaco == checklist.length[a]) {
              break;
            } else {
              checklist.push(espaco);
            }
          }
        }

      }
      if (frase == clauses && checklist.lengh == variables) {
        return true;
      } else {
        return false;
      }
    }
  }

  let result = { 'clauses': [], 'variables': [] }
  if (specOk) {
    result.clauses = clauses
    result.variables = variables
  }
  return result
}
