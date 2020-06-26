class Inimigo extends Animacao {
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade;
    //this.delay = delay;
    // this.x = width + this.delay;
    this.x = width ;
  }
  
  ataque(){
    this.x = this.x - this.velocidade;
    
  }
  
  aparece(){
      this.x = width;
    
  }
   
  
}