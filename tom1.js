export class Item {
  constructor(nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.id = Date.now();
  }
}
