class Pilha {
    #itens;

    constructor() {
        this.#itens = [];
    }

    empilhar(item) {
        this.#itens.push(item);
    }

    desempilhar() {
        return this.#itens.pop();
    }

    topo() {
        return this.#itens[this.#itens.length - 1];
    }

    estaVazia() {
        return this.#itens.length == 0;
    }

    tamanho() {
        return this.#itens.length;
    }
}


const pilha = new Pilha();

pilha.empilhar(10);
pilha.empilhar(20);
pilha.empilhar(30);

console.log(pilha.topo());
console.log(pilha.tamanho());

pilha.desempilhar();

console.log(pilha.topo());
console.log(pilha.estaVazia());