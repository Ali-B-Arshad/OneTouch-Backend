const routes = require('express').Router();
const boardController = require('./controllers/boardControllers');




routes.put('/create', boardController.create);
routes.get('/getAllBoards', boardController.getAllBoards);
routes.put('/update', boardController.update);
routes.delete('/delete', boardController.delete);

module.exports = routes;