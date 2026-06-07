class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu e-mail é ${this.email}.`);
    }

    fazerAniversario() {
        this.idade++;
    }
}


const pessoa1 = new Pessoa("Julia", 16, "julia@email.com");
pessoa1.apresentar();
pessoa1.fazerAniversario();
console.log(pessoa1.idade);