var express = require('express');
var router = express.Router();

var myData = "TBD";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API for Wastewater Index',
x: myData });
});

router.get('/about', function(req, res, next) {
  res.send("This is an API for the EPI wastewater dataset. Made Feb. 2017. \nFor questions or comments, please contact oam [at] @alumni.berkeley.edu \n***")
});

module.exports = router;
