var bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

module.exports = function(app) {

  // NEW: Adding country data routes:

  app.get('/api/country/:id', function(req, res) {

    res.render('country', { ID: req.params.id, Qstr: req.query.qstr });

  });

  app.post('/api/country', jsonParser, function(req, res) {
    //save to the db

  });

  app.delete('/api/country/:id', function(req, res) {
    // delete from the db
  });

}
