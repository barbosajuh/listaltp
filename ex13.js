class Endereco {
    constructor(rua, cidade) {
        this.rua = rua;
        this.cidade = cidade;
    }
}

class Contato {
    constructor(telefone, email) {
        this.telefone = telefone;
        this.email = email;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        console.log("Nome:", this.nome);
        console.log("Rua:", this.endereco.rua);
        console.log("Cidade:", this.endereco.cidade);
        console.log("Telefone:", this.contato.telefone);
        console.log("E-mail:", this.contato.email);
    }
}


const endereco = new Endereco("Rua das Flores", "Nova Andradina");
const contato = new Contato("67999999999", "julia@email.com");

const usuario = new PerfilUsuario("Julia", endereco, contato);

usuario.exibirPerfil();