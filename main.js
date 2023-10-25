/*O método query-Selector busca apenas o primeiro elemento correspondente ao seletor. Exemplo abaixo*/
//tecla Pom
/*function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

//tecla clap
function tocaSomClap () {
  document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

//tecla tim
function tocaSomTim () {
  document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

//tecla puff
function tocaSomPuff () {
  document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

//tecla splash
function tocaSomSplash () {
  document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

//tecla toim
function tocaSomToim () {
  document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

//tecla psh
function tocaSomPsh () {
  document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

//tecla tic
function tocaSomTic () {
  document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

//tecla tom
function tocaSomTom () {
  document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/


//-------------------------------------------------------------------------

/*criando referencia - (reduzindo referencia da linha)deve utilizar a palavra reserva-
da const. A palavra const vem de “constante”, ou seja, algo que nunca muda.
Então criar um nome para essa lista(para guardar a lista de botoes)
Para armazenar um valor na referência criada, utilize o comando de atribuição =.
Conclusão:a lista de elementos encontrada por meio do método de busca
querySelectorAll será armazenada na referência listaDeTeclas.*/

/*function tocaSomPom(){
  document.querySelector('#som_tecla_pom').play();
  }

function tocaSomClap(){
  document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim(){
document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff(){
  document.querySelector('#som_tecla_puff').play();
  }
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
    }
function tocaSomToim(){
      document.querySelector('#som_tecla_toim').play();
      }
function tocaSomPsh(){
        document.querySelector('#som_tecla_psh').play();
        }
  const listaDeTeclas = document.querySelectorAll('.tecla');
  listaDeTeclas[0].onclick = tocaSomPom;
  listaDeTeclas[1].onclick = tocaSomClap;
  listaDeTeclas[2].onclick = tocaSomTim;
  listaDeTeclas[3].onclick = tocaSomPuff;
  listaDeTeclas[4].onclick = tocaSomSplash;
  listaDeTeclas[5].onclick = tocaSomToim;
  listaDeTeclas[6].onclick = tocaSomPsh;
  listaDeTeclas[7].onclick = tocaSomTic;
  listaDeTeclas[8].onclick = tocaSomTom;*/



//Declarar e chamar a função, executar o som através do play
/*
querySelector para selecionar elementos
concede o acesso ao código, atribuir para tocar o som*/
//-----------------------------------------------------------------------------
//Estrutura de repetição  -enquanto - receber se verdadeiro ou falso

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0; //loop infinito então

//enquanto (condição)
while (contador = listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  //template string
  const idAudio = `#som_${instrumento}`;

  console.log(idAudio);//imprimir o contador várias vezes

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  contador = contador + 1; //então conta

  console.log(contador);//imprimir o contador várias vezes
};