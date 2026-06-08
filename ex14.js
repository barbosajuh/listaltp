class Aluno {
    #nota1;
    #nota2;

    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.#nota1 = nota1;
        this.#nota2 = nota2;
    }

    get nota1() {
        return this.#nota1;
    }

    get nota2() {
        return this.#nota2;
    }

    set nota1(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota1 = valor;
        }
    }

    set nota2(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota2 = valor;
        }
    }

    static calcularMedia(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}

const aluno = new Aluno("Julia", 8, 9);

console.log("Nota 1:", aluno.nota1);
console.log("Nota 2:", aluno.nota2);

console.log(
    "Média:",
    Aluno.calcularMedia(aluno.nota1, aluno.nota2)
);