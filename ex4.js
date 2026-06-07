class Temperatura {
    #celsius;

    constructor(celsius) {
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    }

    set celsius(valor) {
        this.#celsius = valor;
    }

    get fahrenheit() {
        return (this.#celsius * 9/5) + 32;
    }

    get kelvin() {
        return this.#celsius + 273.15;
    }
}


const temp = new Temperatura(25);

console.log(`Celsius: ${temp.celsius}`);
console.log(`Fahrenheit: ${temp.fahrenheit}`);
console.log(`Kelvin: ${temp.kelvin}`);