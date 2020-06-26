class Personagem extends Animacao{
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    //Define gravidade do pulo ( Dá dificuldade ao jogo )
    this.gravidade = 4;
    // Define altura do pulo;
    this.alturaDoPulo = -50;
    // Controlador de pulos;
    this.pulos = 0;
  }
  
  
  // Define e controla pulos do personagem
  pula(){
    //aplica controle de pulos
    if(this.pulos < 4){
      
    // Define velocidade do pulo( altura tbm sofre influência )
    this.velocidadeDoPulo = this.alturaDoPulo;
    this.pulos ++ ;
      
    }
    //this.y = this.y -50;
    // console.log('Pulou');
  }
  
  // Desenvolve gravidade para personagem
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    // Aplica limite da graqvidade
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0;
    }
  }
  
  // Valida se perdeu vida e dá tempo para validar próxima colisão
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo){
    // Valida se colidiu recentemente
    if(this.invencivel){
      return false;
    }
    
    //noFill();
    //rect( this.x, this.y, this.largura, this.altura);
    //rect( inimigo.x, inimigo.y,  inimigo.largura, inimigo.altura);
    const precisao = 0.7;
    
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
  
  

}