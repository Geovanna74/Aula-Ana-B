// //Importando o arquivo de classe
// import Carro from "./Carro.js";

// const objCarro = new Carro();
// objCarro.nome = "Lily";
// let nome = objCarro.nome;

// console.log("O nome é: ", nome);

// const objCarro2 = new Carro(); //INSTANCIANDO MINHA CLASSE
// objCarro2.definirChassi("1234AB$!") // DEFININDO O NOME DO MEU CHASSI
// let chassi = objCarro2.pegarChassi(); //AQUI ESTOU CAPTURANDO O NOME DO CHASSI

// console.log(chassi); //MOSTRA O NOME DO CHASSI



import ContaBancaria from "./ContaBancaria.js";


let saldoIncial = 100000;
const contaBancaria = new ContaBancaria(saldoIncial)

contaBancaria.depositar(20000);
let extrato = contaBancaria.getExtrato();
console.log("Meu saldo é: " , extrato);

contaBancaria.sacar(5000);
console.log("Meu saldo é: ", contaBancaria.getExtrato());

