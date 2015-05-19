var express = require('express');
var app     = express();
var hbs     = require('express-handlebars');

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('views', './views');
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(request, response){
	response.render('index');
});

var server = app.listen(process.env.PORT || 5000);
