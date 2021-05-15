var express = require('express');
var {_,connection} = require('sql_connection')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/api/users/:id", function(req, res){
       
  const id = req.params.id; // получаем id
  let user = connection.query(`SELECT * FROM users WHERE users.Id==${id}`);
  // отправляем пользователя
  if(user){
      res.send(user);
  }
  else{
      res.status(404).send();
  }
});


module.exports = router;
