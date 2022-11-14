📚 Questão: Sem usar bibliotecas, crie um projeto simples em Node.js que seja capaz de responder requisições HTTP.
Explique como rodar e testar.

<b>Passo 1:</b> Criar uma pasta de nome projeto<br>
<b>Passo 2:</b> Criar um arquivo de nome servidor.js<br>
<b>Passo 3:</b> Inserir o código abaixo no arquivo servidor.js<br>

***Código <br>
---> importa a biblioteca http <br>
const http = require("http"); 

//const host = 'localhost';

---> criação da porta <br>
const port = 8000; 

---> Listener - função que lida com solicitação HTTP e retorna uma resposta HTTP<br>
const requestListener = function (req, res) {
    //res.writeHead(200);
    res.end("Hello, World!");
};

---> Criação do servidor <br>
const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://host:${port}`);
});

<br><b>Passo 4:</b> Para rodar o projeto colocar o código no terminal : node servidor.js<br>
<b>Passo 5:</b> Para testar a página, abrir o navegador e acessar: http://localhost:8000/
