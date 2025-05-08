const estacionamento = {
  calcularTroco: function () {
    const valorTarifa = parseFloat(document.getElementById("valorTarifa").value);
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const resultado = document.getElementById("resultado");
    const troco = document.getElementById("troco");

    if (isNaN(valorTarifa) || isNaN(valorPago)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      troco.textContent = "";
      return;
    }

    if (valorPago < valorTarifa) {
      resultado.textContent = "Valor pago insuficiente.";
      troco.textContent = "";
      return;
    }

    const tempoEstacionamento = (valorPago / valorTarifa) * 60; // Tempo em minutos
    const valorTroco = valorPago - valorTarifa;

    resultado.textContent = `Você pode estacionar por ${tempoEstacionamento.toFixed(2)} minutos.`;
    troco.textContent = `Seu troco é R$ ${valorTroco.toFixed(2)}.`;
  }
};