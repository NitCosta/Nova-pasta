const estacionamento = {
  calcularTroco: function () {
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const resultado = document.getElementById("resultado");
    const troco = document.getElementById("troco");

    if (isNaN(valorPago) || valorPago <= 0) {
      resultado.textContent = "Por favor, insira um valor válido.";
      troco.textContent = "";
      return;
    }

    let tempoEstacionamento = 0;
    let valorTarifa = 0;

    // Determina a tarifa e o tempo com base no valor pago
    if (valorPago >= 5.00) {
      tempoEstacionamento = 120;
      valorTarifa = 5.00;
    } else if (valorPago >= 3.00) {
      tempoEstacionamento = 60;
      valorTarifa = 3.00;
    } else if (valorPago >= 1.50) {
      tempoEstacionamento = 30;
      valorTarifa = 1.50;
    } else {
      resultado.textContent = "Valor insuficiente para qualquer tempo de estacionamento.";
      troco.textContent = "";
      return;
    }

    const valorTroco = valorPago - valorTarifa;

    resultado.textContent = `Você pode estacionar por ${tempoEstacionamento} minutos.`;
    troco.textContent = `Seu troco é R$ ${valorTroco.toFixed(2)}.`;
  }
};