//Arquivo de configuração do servidor

const express = require('express'); //importando um modulo externo  meu projeto;
//cria instancia do express
const app = express();
const port = 3000;

const usarioRoute = require('./src/routes/usuarios');


app.use(express.json()); //permite que o servidor leia os dados em JSON enviados pelo corpo da requisição

app.use('/usuarios' , usarioRoute);

//Rota principal GET => localhost:3000/
app.get('/',  (req, res)=>{
    res.send("Olá pessoal, estou no navegador");
});


app.listen(port, () => {
    console.log(` srvidor rodando na porta ${port}. abra http://localhost:${port}`);
});