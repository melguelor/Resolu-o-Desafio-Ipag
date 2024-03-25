# 7. Manipulação e Comunicação de Objetos:
Crie um programa que conecte controles de marcas diferentes (LG, Samsung, Sony, etc) a uma ou mais TVs.
O programa deve permitir a seleção de um controle e a comunicação com a TV para ligar e desligar;
As TVs e controles devem ser representados por objetos, e a comunicação entre eles deve ser feita por métodos.
O programa deve exibir na tela as ações realizadas e o estado atual da TV.
Caso o controle selecionado não seja compatível com a TV, o programa deve exibir uma mensagem de erro.




____________________

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
