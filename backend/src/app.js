const express = require('express');
const routes = require('./routes');

class App {
  constructor() { // Executa automatico (constroi) quando a classe é chamada.
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
