const p = document.getElementsByTagName('p')[0];
const img = document.getElementsByTagName('img')[0];
const currentSrc = img.getAttribute('src');

function jogarPedra() {
  img.setAttribute('src', 'papel.jpg');
  p.innerText = 'Gerosvaldo jogou papel. Você perdeukkkkkk';
}

function jogarPapel() {
  img.setAttribute('src', 'tesoura.jpg');
  p.innerText = 'Gerosvaldo jogou tesoura. Você perdeukkkkkk';
}

function jogarTesoura() {
  img.setAttribute('src', 'pedra.jpg');
  p.innerText = 'Gerosvaldo jogou pedra. Obito morreu e você perdeukkkkkk';
}

function reiniciarJogo() {
  img.setAttribute('src', 'rockpaperscissors.jpg');
  p.innerText = '';
}

function denunciarJogo() {
  alert('Jogo denúnciado por Golpe ou Fraude.');
}