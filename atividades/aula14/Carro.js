class Carro {
    nome; //publico
    ano; //publico
    modelo; //publico
    #chassi; //privando
    constructor(nome,ano,modelo,chassi){
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi;
    }

    definirChassi (chassi){
        this.#chassi = chassi;
    }
    pegarChassi (){
        return this.#chassi;
    }
}

module.exports = Carro;