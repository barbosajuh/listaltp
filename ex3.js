class Produto {
    static totalProdutos = 0;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

        Produto.totalProdutos++;
    }

    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }

    static obterTotal() {
        return Produto.totalProdutos;
    }
}


const p1 = new Produto("Mouse", 50, 10);
const p2 = new Produto("Teclado", 100, 5);

console.log(p1.calcularValorEstoque());
console.log(Produto.obterTotal());