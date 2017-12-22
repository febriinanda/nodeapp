var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'paket.id'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.connect();
  connection.query('SELECT * from heroes', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
  res.json(rows);
})
  connection.end();


});

module.exports = router;
