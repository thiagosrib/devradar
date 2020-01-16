const { Router } = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ msg: 'Hello world' });
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
