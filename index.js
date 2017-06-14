var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));



// 路由
app.get("/test", function(req, res) {
    res.send("Hello");
});

app.listen(port, function(req, res) {
    console.log("Server init at port " + port);
});