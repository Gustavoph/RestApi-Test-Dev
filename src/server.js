const server = require("./app");
const { connection } = require("./database");
const express = require("express");
const port = 3030;

if (connection) {
  console.log("DB connectado");
}

server.listen(port, () => {
  console.log(`Servidor init at port: ${port}`);
});
