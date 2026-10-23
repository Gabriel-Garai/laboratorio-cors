const http = require("http");

const PORT = 8080;
const ORIGEM_CLIENTE =
  `https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`;

http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/dados") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": ORIGEM_CLIENTE
    });

    res.end(JSON.stringify({
      matricula: "2026108062",
      status: "dados_sensiveis"
    }));
    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify({ erro: "Nao encontrado" }));
}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
  console.log(`Origem permitida: ${ORIGEM_CLIENTE}`);
});