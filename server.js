var express = require('express');
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.set('view options', {layout: false});
    app.engine('html', require('ejs').renderFile);
});
//app.engine('html', require('ejs').renderFile);

app.get('/hello.txt', function(req, res){
      res.send('Hello World');
});

app.get('/', function(req, res){
      res.render("index");
});


app.listen(3000);
console.log('Listening on port 3000');

