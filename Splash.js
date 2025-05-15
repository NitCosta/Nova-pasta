export function validarCampos(nome, quantidade) {
  return nome.trim() !== "" && quantidade > 0;
}

export function atualizarListaDOM(lista, elementoDOM) {
  const html = lista
    .map(item => `
      <li data-id="${item.id}">
        ${item.nome} - ${item.quantidade}
        <button class="remover">Remover</button>
      </li>
    `)
    .join("");

  elementoDOM.innerHTML = html;
}
