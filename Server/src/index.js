//const http = require("http");
//const getCharById = require("./controllers/getCharById");
//const PORT = 3001;
//
//http
//  .createServer((req, res) => {
//    res.setHeader("Access-Control-Allow-Origin", "*");
//    if (req.url.includes("/rickandmorty/character")) {
//      const id = parseInt(req.url.split("/").pop());
//      getCharById(res, id);
//    }
//  })
//  .listen(PORT, "localhost", () => {
//    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
//  });
const express = require("express");
const server = express();
const PORT = 3001;
const mainRouter = require("./routes/index");

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", mainRouter);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
