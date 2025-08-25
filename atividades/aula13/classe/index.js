import Pessoa from "./Pessoa.js";

const pessoal1 = new Pessoa("Caroline",17,"303.029.299-16"); //A constante pessoal1 é um objeto
pessoal1.definirNome("lily"); //definindo o nome lily
let nomePessoa = pessoal1.pegarNome(); 
console.log(nomePessoa);
