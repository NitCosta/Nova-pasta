import { Item } from "./tom1.js";
import { validarCampos, atualizarListaDOM } from "./utils.js";

const form = document.getElementById("formItem");
const nomeInput = document.getElementById("nome");
const quantidadeInput = document.getElementById("quantidade");
const listaDOM = document.getElementById("listaItens");

let itens = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = nomeInput.value;
  const quantidade = parseInt(quantidadeInput.value);

  if (!validarCampos(nome, quantidade)) {
    alert("Preencha os campos corretamente.");
    return;
  }

  const novoItem = new Item(nome, quantidade);
  itens = [...itens, novoItem];

  atualizarListaDOM(itens, listaDOM);
  form.reset();
});

listaDOM.addEventListener("click", (e) => {
  if (e.target.classList.contains("remover")) {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);

    itens = itens.filter(item => item.id !== id);
    atualizarListaDOM(itens, listaDOM);
  }
});
