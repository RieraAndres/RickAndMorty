const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = parseInt(req.url.split("/").pop());
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost", () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  });
