class Pessoa{
    //Atributos da classe pessoa


    constructor (nome,idade,cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
         
      //Um metodo para definir o nome
        definirNome(nome){
            this.nome= nome;
        }

        pegarNome(){
            return this.nome;
        }
}

//Expotando  a classe Pessoa
module.exports = Pessoa;