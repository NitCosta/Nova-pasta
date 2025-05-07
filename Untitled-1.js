console.log ("Iniciando o jogo de adivinhação!");

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasMaximas = 10;
let tentativas = 0;
let jogoEncerrado = false;

const btnChutar = document.getElementById("btnChutar");
if (btnChutar) {
  btnChutar.addEventListener("click", function () {
    if (jogoEncerrado) return;

    const palpiteInput = document.getElementById("palpite");
    if (!palpiteInput || !(palpiteInput instanceof HTMLInputElement)) return;

    const palpite = parseInt(palpiteInput.value);
    const mensagem = document.getElementById("mensagem");
    const tentativasRestantes = document.getElementById("tentativasRestantes");

    if (!mensagem || !tentativasRestantes) return;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
      return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
      mensagem.textContent = `🎉 Você acertou! O número era ${numeroSecreto}.`;
      jogoEncerrado = true;
    } else if (tentativas >= tentativasMaximas) {
      mensagem.textContent = `💥 Você perdeu! O número secreto era ${numeroSecreto}.`;
      jogoEncerrado = true;
    } else if (palpite < numeroSecreto) {
      mensagem.textContent = "🔼 O número secreto é maior.";
    } else {
      mensagem.textContent = "🔽 O número secreto é menor.";
    }

    tentativasRestantes.textContent = `Tentativas restantes: ${tentativasMaximas - tentativas}`;
  });
}

