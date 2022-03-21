const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/lamba'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/lamba/index.html'));});
app.listen(process.env.PORT || 8080);