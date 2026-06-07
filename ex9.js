class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    calcularSalarioTotal() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, cargo, bonus) {
        super(nome, salario, cargo);
        this.bonus = bonus;
        this.equipe = [];
    }

    adicionarMembro(funcionario) {
        this.equipe.push(funcionario);
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }
}

const gerente = new Gerente("Julia", 5000, "Gerente", 1000);

gerente.adicionarMembro("Carlos");
gerente.adicionarMembro("Ana");

console.log(gerente.equipe);
console.log(gerente.calcularSalarioTotal());