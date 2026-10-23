const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  const arquivo = path.join(__dirname, "index.html");

  fs.readFile(arquivo, (erro, conteudo) => {
    if (erro) {
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      res.end("Erro ao carregar index.html");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end(conteudo);
  });
}).listen(3000, () => {
  console.log("[CLIENTE] Frontend ativo na porta 3000");
});