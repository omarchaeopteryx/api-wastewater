var express = require('express');
var router = express.Router();

// Setting up the input of the given EPI data:
// --> FIX: read in dynamically vs. http://codebeautify.org/csv-to-xml-json

var myDataRaw = require('../public/data.json') // This is an array of JSON objects.

// Matches the name of the state to the data object:
var countryFinder = function(givenCountry, myDataRaw) {

  var givenCountryDowncase = givenCountry.toLowerCase();

  for (var i in myDataRaw) {
    if (myDataRaw[i].country.toLowerCase() === givenCountryDowncase) { return myDataRaw[i]};
    }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(myDataRaw);
});

// TO-DO: add country codes as valid querying technique.
// router.get('/FRA', function(req, res, next) {
//   res.send(countryFinder("France", myDataRaw))
//
// });
//
// router.get('/USA', function(req, res, next) {
//   res.send('United States of America: datum');
// });
//
// router.get('/ZAF', function(req, res, next) {
//   res.send('South Africa: datum');
// });

router.get('/:id', function(req, res) {
  // res.send({ country: req.params.id, Qstr: req.query.qstr });
  res.send(countryFinder(req.params.id, myDataRaw));

});

module.exports = router;
