var express = require('express');
var request = require('request');

var app = express();


app.get('/api/:query',function(req,res){
    var query = req.params.query;
    

request({
    url: 'https://pixabay.com/api/?key=4881913-ba1119e0200c9acf8643d94e3&q='+query+'&image_type=photo&pretty=true', //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
    json: {
        field1: 'data',
        field2: 'data'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        
        var out = {
            data:[]
        }; 
        for(var i=0;i<body.hits.length;i++){
            out.data[i] = body.hits[i].userImageURL;
        }
        res.json(out);
        console.log(out);
       // console.log(response.statusCode, body);
}
});

});
app.listen(process.env.PORT || 1337,function(){
	console.log('On 1337');
})