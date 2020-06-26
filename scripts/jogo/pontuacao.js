class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT);
    // Define cor do texto da pontuação
    fill('#fff');
    // Define tamanho da fonte
    textSize(50);
    // Define posição na tela
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
  }
}