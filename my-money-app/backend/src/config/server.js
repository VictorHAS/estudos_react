const port = 3001;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
