class ContaBancaria {
    constructor(titular, saldo, numeroConta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    exibirSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}

const conta = new ContaBancaria("Julia", 1000, "12345");
conta.depositar(500);
conta.sacar(200);
conta.exibirSaldo();