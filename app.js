var app    = require('express')();

app.get('/', function(request, response){
	response.send('OK');
});

var server = app.listen(process.env.PORT || 5000, function(){
	
});