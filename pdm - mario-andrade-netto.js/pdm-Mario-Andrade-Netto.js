const aluno1 = { //cria o abjeto aluno1 com seuas validações de acordo com o que é necessario
    nome:"Artur Santos",
    idade: 17,
    cursando: ["matematica" - "administração" - "informatica" - "publicidade"],
    presença: ["02/03/2024" - "03/02/2024" - "04/03/2024" - "05/02/2024"],
    ra: "09873459"
}
const aluno2 = {//cria o objeto aluno2 onde ele naop obdeçe o que é exigido 
    nome:"Rafael de Almeida",
    idade: 12,
    cursando: "matematica" - "administração" - "informatica" - "publicidade",
    presença: "02/03/2024" - "03/02/2024" - "04/03/2024",
    ra: "09873459"
}

function validaCadastro() {//funçao validaCadastro
    if (aluno1.nome <10) {// verifica se o nome possui 10 caracteres
    } else {
        console.log("nome invalido")
    }
    if(aluno1.idade <14){//verifica se a idade é maior que 14
    }
    else{
        console.log("idade minima nao alcançada")
    }
    if (aluno1.cursando[3]) {// if que verifica se tem pelo menos 3 cursos
    }
    else{
        console.log("nao esta cursando o minimo de cursos")
    }
    if (aluno1.presença[2]) {  //if que verifica se tem pelo menos 2 presença 
    }
    console.log("nao tem precensa o suficiente")
    if (aluno1.ra <7) {
        
    } else {
        console.log("ra invalido")
    }



    if (aluno2.nome <10) {// verifica se o nome possui 10 caracteres
    } else {
        console.log("nome invalido")
    }
    if(aluno2.idade <14){// if que verifica se tem pelo menos 3 cursos
    }
    else{
        console.log("idade minima nao alcançada")
    }
    if (aluno2.cursando[3]) { // if que verifica se tem pelo menos 3 cursos
    }
    else{
        console.log("nao esta cursando o minimo de cursos")
    }
    if (aluno2.presença[2]) {   //if que verifica se tem pelo menos 2 presença 
    }
    console.log("nao tem precensa o suficiente")
    if (aluno2.ra <7) {
        
    } else {
        console.log("ra invalido")
    }
    return validaCadastro //retorna o valida cadastro
}


