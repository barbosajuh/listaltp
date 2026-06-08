class Midia {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }

    toString() {
        return `${this.titulo} (${this.ano})`;
    }
}

class Livro extends Midia {
    constructor(titulo, ano, autor) {
        super(titulo, ano);
        this.autor = autor;
    }

    toString() {
        return `Livro: ${this.titulo} - ${this.autor} (${this.ano})`;
    }
}

class Filme extends Midia {
    constructor(titulo, ano, diretor) {
        super(titulo, ano);
        this.diretor = diretor;
    }

    toString() {
        return `Filme: ${this.titulo} - ${this.diretor} (${this.ano})`;
    }
}

class Musica extends Midia {
    constructor(titulo, ano, artista) {
        super(titulo, ano);
        this.artista = artista;
    }

    toString() {
        return `Música: ${this.titulo} - ${this.artista} (${this.ano})`;
    }
}


const livro = new Livro("Dom Casmurro", 1899, "Machado de Assis");
const filme = new Filme("Titanic", 1997, "James Cameron");
const musica = new Musica("Evidências", 1990, "Chitãozinho e Xororó");

console.log(livro.toString());
console.log(filme.toString());
console.log(musica.toString());