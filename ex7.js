class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    emitirSom() {
        console.log(`${this.nome} faz ${this.som}`);
    }
}

class Cachorro extends Animal {
    constructor(nome, som, raca) {
        super(nome, som);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome}, da raça ${this.raca}, faz ${this.som}`);
    }
}


const cachorro1 = new Cachorro("Rex", "Au Au", "Labrador");
const cachorro2 = new Cachorro("Bolt", "Au Au", "Pastor Alemão");

cachorro1.emitirSom();
cachorro2.emitirSom();