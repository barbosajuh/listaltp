class Usuario {
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual == this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso!");
        } else {
            console.log("Senha atual incorreta!");
        }
    }
}


const usuario = new Usuario("Julia", "1234");

console.log(usuario.autenticar("1234"));
usuario.alterarSenha("1234", "abcd");
console.log(usuario.autenticar("abcd"));