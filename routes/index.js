var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '나의 Express 서버구축 성공' });
});

module.exports = router;
