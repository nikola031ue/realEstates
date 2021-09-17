var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
//ovde se prave rute i maapiraju u ontrollers
module.exports = router;