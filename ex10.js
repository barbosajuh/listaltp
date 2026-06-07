class Forma {
    calcularArea() {
        throw new Error("Método deve ser implementado.");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

class Retangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}


const circulo = new Circulo(5);
const retangulo = new Retangulo(10, 4);
const triangulo = new Triangulo(8, 6);

console.log(circulo.calcularArea());
console.log(retangulo.calcularArea());
console.log(triangulo.calcularArea());