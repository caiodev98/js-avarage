const students = [
  {
    name: "Caio",
    gradeOne: 7,
    gradeTwo: 9,
  },
  {
    name: "Ana",
    gradeOne: 9,
    gradeTwo: 9.5,
  },
  {
    name: "Pedro",
    gradeOne: 5,
    gradeTwo: 10,
  },
  {
    name: "Maria",
    gradeOne: 5,
    gradeTwo: 6,
  }
]

function media (gradeOne,gradeTwo){
  return ((gradeOne + gradeTwo) / 2)
}

/* function returnMedia(aluno){
  
  return 
  `Aluno ${aluno.name} possui média de:
  ${media(aluno.gradeOne, aluno.gradeTwo)}
  `
  
  
} */

for(let aluno of students){

  if(media(aluno.gradeOne, aluno.gradeTwo) >= 7){
    alert(`A média do(a) aluno(a) ${aluno.name} é: 
    ${media(aluno.gradeOne, aluno.gradeTwo)}
    Prabéns, ${aluno.name}! Você foi aprovado(a) no concurso!
    `)
  }else{
    alert(`A média do(a) aluno(a) ${aluno.name} é: 
    ${media(aluno.gradeOne, aluno.gradeTwo)}
    Não foi dessa vez, ${aluno.name}! Tente novamente!
    `)
  }
}