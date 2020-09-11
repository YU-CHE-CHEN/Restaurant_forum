const restController = require('..controllers/restController.js')

module.exports = {

  app.get('/', (req, res) => res.redirect('/restaurants'))

  app.get('/restaurants', restController.getRestaurants)
}