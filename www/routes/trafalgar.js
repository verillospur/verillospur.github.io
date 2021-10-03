var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
      title: 'Trafalgar Systems',
      subtitle: 'Atomic Node Experimental Core Systems',
      experimental_title: 'MyMessages: Telegram App'
    }
  );
});

module.exports = router;
