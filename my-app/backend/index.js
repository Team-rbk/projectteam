const express = require('express');
const cors=require('cors')
const app = express();
const Route=require('./router')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors())
app.use('/',Route)
const PORT = 8080;

app.listen(PORT, function () {
  console.log('listening on http://localhost:' + PORT);
});
