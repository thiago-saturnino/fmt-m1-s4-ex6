class Padaria {
  constructor() {}
  addEstoque(newEstoque, produto) {
    localStorage.setItem(newEstoque, produto);
  }
  Compra(item, nome) {
    if (item == localStorage.getItem(nome)) {
      localStorage.removeItem(nome);
    } else {
      return console.log(`Nome do item não existe`);
    }
  }
}

const padaria1 = new Padaria();

console.log(padaria1.addEstoque("Pão", "Focaccia"));
console.log(padaria1.addEstoque("Bread", "Doce"));
console.log(padaria1.Compra("Focaccia", "Pão"));
