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

  connection.query('SELECT * from heroes', function (err, rows, fields) {
    if (err) throw err
    res.json(rows);
  });
});

router.get('/group', function(req, res, next){
  var group = {};

  connection.query('SELECT * from heroes', function (err, rows, fields) {
    if (err) throw err

    for (var i = 0; i < rows.length; i++) {
      if (!group[rows[i]["type"]]) {
        group[rows[i]["type"]] = [];
      }
      group[rows[i]["type"]].push(rows[i].name);
    }
    res.json(group);
});
})

module.exports = router;
