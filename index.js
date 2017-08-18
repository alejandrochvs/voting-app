var app = require('express')();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');
app.get('/',function(req,res){
    res.send('Voting app.');
})
app.listen(port, function () {
    console.log('App listening on port ' + port);
});
