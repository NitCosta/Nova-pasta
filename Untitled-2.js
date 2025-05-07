// 
console.log ("🚗 Estacionamento - JavaScript");

class Estacionamento {
    constructor() {
      this.resultado = document.getElementById("resultado");
    }
  
    calcularTempo() {
      const input = document.getElementById("valorPago");
      const valor = parseFloat(input.value);
  
      if (isNaN(valor)) {
        this.resultado.textContent = "⚠️ Por favor, insira um valor válido.";
        return;
      }
  
      if (valor < 1.00) {
        this.resultado.textContent = "❌ Valor insuficiente. O mínimo é R$1,00.";
        return;
      }
  
      let tempo = 0;
      let valorCobrado = 0;
  
      if (valor >= 3.00) {
        tempo = 120;
        valorCobrado = 3.00;
      } else if (valor >= 1.75) {
        tempo = 60;
        valorCobrado = 1.75;
      } else if (valor >= 1.00) {
        tempo = 30;
        valorCobrado = 1.00;
      }
  
      const troco = (valor - valorCobrado).toFixed(2).replace('.', ',');
  
      let mensagem = `✅ Tempo liberado: ${tempo} minutos.`;
  
      if (troco > 0) {
        mensagem += ` Troco: R$${troco}`;
      }
  
      this.resultado.textContent = mensagem;
    }
  }
  
  const estacionamento = new Estacionamento();
  
