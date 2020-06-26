class Vida{
  constructor(total, inicial){
    // valor total de vidas
    this.total = total;
    // valor inicial de vidas
    this.inicial = inicial;
                              
    this.vidas = this.inicial;
    
    this.largura = 25;
    this.altura = 25;
    
    this.yInicial = 20;
    this.xInicial = 20;
    
  }
  
  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 10;
      const posicao =  this.xInicial * ( i + 1 );
      
      image(imgVida, posicao + margem ,this.yInicial, this.largura, this.altura);
      }     
  }
  
  ganhaVida(){
    if(this.vidas <= this.total) {
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--;
  
  }
  
  
}


