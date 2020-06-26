// Pré carregamento de mídias
function preload(){
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imagemInicial = loadImage('imagens/cenario/telaInicial.png')
  fonteTelaInicial = loadFont('imagens/fonte/fonteTelaInicial.otf');
  imgGameOver = loadImage('imagens/assets/game-over.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  imgVida =  loadImage('imagens/assets/coracao.png');
  imgInimigo = loadImage('imagens/inimigos/gotinha.png');
  imgInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  fita = loadJSON('cartucho/fita.json');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}