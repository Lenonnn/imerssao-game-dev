class Jogo {
  constructor() {
    // this.inimigoAtual = 0;
    this.indice = 0;
    this.mapa = fita.mapa; 

  }

  setup() {
    cenario = new Cenario(imgCenario, 4);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    // Botões não funcionam
    //startGame = createButton('START');
    //startGame.position(19, 19);
    //startGame.mousePressed(draw);
    //stopGame = createButton('PAUSE');
    //stopGame.position(100, 19);

    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imgInimigo, width - 50, 30, 52, 52, 104, 104, 10);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imgInimigoTroll, width, 0, 200, 200, 400, 400, 15);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width - 50, 200, 100, 75, 200, 150, 10);


    // Adiciona todos os inimigos dentro do Array Inimigos;
    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);

  }

  keyPressed(key) {
    // if(key === 'ArrowUp' || 'Space' || 'w'){
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }


  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    // Define 1 inimigo da lista de inimigos e pega a posição
    //const inimigo = inimigos[this.inimigoAtual];
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    // Verifica se o inimigo saiu todo da tela 
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    
    // Definições de inimigo vísivel na tela
    if (inimigoVisivel) {
      // Troca inimigo
      //this.inimigoAtual++;
      this.indice++;
      inimigo.aparece();
      //if (this.inimigoAtual > 2) {
      if (this.indice > this.mapa.length -1) {
        // Quando acabaro todos inimigos, começa do 0 de novo
        //this.inimigoAtual = 0;
        this.indice = 0;
      }
      // Configuração valor randomico para velocidade
      // inimigo.velocidade = parseInt(random(5, 40));
      //console.log(inimigoAtual);
    }

    // inimigoTroll.exibe();
    // inimigoTroll.ataque();
    // inimigoVoador.exibe();
    // inimigoVoador.ataque();
    // inimigo.exibe();
    // inimigo.ataque();

    // inimigos.forEach( inimigo => {
    inimigo.exibe();
    inimigo.ataque();

    if (personagem.estaColidindo(inimigo)) {
      //console.log('Colidiu');
      // Define posição da imagem Gema Over
      vida.perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas === 0){
      image(imgGameOver, width / 2 - 200, height / 3);
      noLoop();
      }
    }
    // })
  }

}