class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    processar() {
        throw new Error("Método deve ser implementado.");
    }
}

class Cartao extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via Cartão.`;
    }
}

class Pix extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via PIX.`;
    }
}

class Boleto extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via Boleto.`;
    }
}

function processarTodos(pagamentos) {
    pagamentos.forEach(p => {
        console.log(p.processar());
    });
}


const pagamentos = [
    new Cartao(100),
    new Pix(250),
    new Boleto(500)
];

processarTodos(pagamentos);