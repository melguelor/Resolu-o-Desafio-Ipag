
class TV {
    constructor(marca) {
      this.marca = marca;
      this.ligada = false;
    }
  
    ligar() {
      if (!this.ligada) {
        this.ligada = true;
        console.log(`A TV ${this.marca} foi ligada.`);
      } else {
        console.log(`A TV ${this.marca} já está ligada.`);
      }
    }
  
    desligar() {
      if (this.ligada) {
        this.ligada = false;
        console.log(`A TV ${this.marca} foi desligada.`);
      } else {
        console.log(`A TV ${this.marca} já está desligada.`);
      }
    }
  }
  
 
  class ControleRemoto {
    constructor(marca) {
      this.marca = marca;
    }
  
    conectar(tv) {
      if (this.marca === tv.marca) {
        console.log(`Controle ${this.marca} conectado à TV ${tv.marca}.`);
        this.tv = tv;
      } else {
        console.log(`Erro: O controle ${this.marca} não é compatível com a TV ${tv.marca}.`);
      }
    }
  
    ligarTV() {
      if (this.tv) {
        this.tv.ligar();
      } else {
        console.log("Erro: Controle não está conectado a nenhuma TV.");
      }
    }
  
    desligarTV() {
      if (this.tv) {
        this.tv.desligar();
      } else {
        console.log("Erro: Controle não está conectado a nenhuma TV.");
      }
    }
  }
  

  const tvPhilco = new TV("philco");
  const tvCEE = new TV("cce");
  const controlePhilco = new ControleRemoto("philco");
  const controleCEE = new ControleRemoto("cce");
  

  controlePhilco.conectar(tvPhilco);
  controleCEE.conectar(tvCEE);
  
  
  controlePhilco.ligarTV();
  controlePhilco.ligarTV(); 
  controleCEE.ligarTV(); 
  controlePhilco.desligarTV(); 
  controleCEE.conectar(tvPhilco); 
