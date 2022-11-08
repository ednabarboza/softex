
const http = require("http"); //---> importa a biblioteca http
//const host = 'localhost';
const port = 8000; //---> criação da porta

//---> Listener - função que lida com solicitação HTTP e retorna uma resposta HTTP
const requestListener = function (req, res) {
    //res.writeHead(200);
    res.end("Hello, World!");
};

//---> Criação do servidor
const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://host:${port}`);
});


