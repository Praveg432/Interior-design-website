var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
function create(){
var con1 = mysql.createConnection({
	host: "localhost",
  user: "root",//change this to your user name in sql
password: "password"//chanage this to your sql password
});

con1.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE database if not exists feedback";
  con1.query(sql, function (err, result) {
    if (err) throw err;
  });
});
}



create();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",//change this to your user name in sql
  password: "Nature-3d",//chanage this to your sql password
  database: "feedback"
});

app.post('/submit',function(req,res){

  var fname=req.body.firstname;
var lname=req.body.lastname;
var acode=req.body.areacode;
var tno=req.body.telnum;
var email=req.body.emailid;
var approve=req.body.approve;
var how=req.body.how;
var message=req.body.feedback;
  res.write('Success\nThank You for your response\nWe will contact you soon\nPress back to go back to the previous page.');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE if not exists fb (Firstname VARCHAR(255),Lastname VARCHAR(255), Areacode varchar(255),Telnum varchar(255),Email VARCHAR(255),Approve VARCHAR(255),How VARCHAR(255),Message VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
  
    var sql = `INSERT INTO fb 
            (
                Firstname ,Lastname , Areacode ,Telnum ,Email ,Approve ,How ,Message
            )
            VALUES
            (
                ?, ?, ?, ?, ?, ?,? ,?
            )`;
con.query(sql, [fname,lname , acode ,tno ,email ,approve ,how ,message], function (err, data) {
    if (err) throw err;
        
    else {
        console.log("1 record inserted");
    }
	res.end();
  });
  });
})
app.listen(3000);
console.log("Running at Port 3000");
