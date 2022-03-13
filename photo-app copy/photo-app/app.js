/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes/index.js')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');



const app = express();
var http = require('http');
const fileUpload = require('express-fileupload');


// default options
app.use(fileUpload());
var fs = require('fs');

var session = require('express-session');

var mysql      = require('mysql');
var bodyParser=require("body-parser");

var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'databaseUser',
              password : 'password',
              database : 'database1'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public/html');
//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'xxx',
    name: 'sessionId',
    resave: true,
    saveUninitialized: true,
    rolling: true, // <-- Set `rolling` to `true`
    cookie: {
        httpOnly: true,
        maxAge: 1*60*60*1000
    }
}))
 

app.use(express.static("public"));

app.get('/', routes.index);//call for main index page
app.post('/search', user.search);

app.post('/postcomments', user.postcomments);
app.get('/postcomments', user.postcomments);

app.get('/viewcomments', user.viewcomments);

app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post

app.get('/signin', user.login);//call for login page
app.post('/signin', user.login);//call for login post

app.get('/dashboard', user.dashboard);//call for dashboard page after login

app.get('/logout', user.logout);//call for logout

app.get('/fileupload',user.fileupload);
app.post('/fileupload', user.fileupload);//call for login post

/*
app.get('/home/profile',user.profile);//to render users profile
*/

//Middleware
app.listen(3000)
