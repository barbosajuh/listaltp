class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    getSaldo() {
        return this.#saldo;
    }

    static converterParaDolarCanadense(valorEmReais) {
        const cotacao = 0.25; 
        return valorEmReais * cotacao;
    }
}


const conta = new ContaBancaria(1000);

conta.depositar(500);
conta.sacar(200);

console.log("Saldo:", conta.getSaldo());

console.log(
    "Em dólar canadense:",
    ContaBancaria.converterParaDolarCanadense(conta.getSaldo())
);