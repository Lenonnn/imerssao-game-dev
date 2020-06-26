
/* Button defintion
// Em desuso
class BotaoStart{
  
  constructor(largura, altura){
    this.largura = largura;
    this.altura = altura;
  }
    
    defineButton(){
    textAlign(RIGHT);
    // Define cor do texto da pontuação
    fill('#fff');
    // Define tamanho da fonte
    textSize(50);
    }
  
  
  
    let button;
    function setup() {
    createCanvas(100, 100);
    background(0);
    button = createButton('click me');
    button.position(19, 19);
    button.mousePressed(changeBG);
    }

    function changeBG() {
    let val = random(255);
    background(val);
    }
  
  
}

*/