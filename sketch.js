function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  // somJogo.play();//Vai tocar a música até o final e vai parar;
  somJogo.loop();// Vai repetir a musica durante o jogo;
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new  BotaoGerenciador('Iniciar', width/2, height/2);
}


function keyPressed(){
  jogo.keyPressed(key);
}


// Chama os elementos de jogo da tela
function draw() {
  cenas[cenaAtual].draw();
}


  
  
  