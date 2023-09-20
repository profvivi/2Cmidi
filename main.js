//Declarar e chamar a função, executar o som através do play
/*
querySelector para selecionar elementos
concede o acesso ao código, atribuir para tocar o som*/


function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

