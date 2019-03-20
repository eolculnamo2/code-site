const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/', (req,res) => res.sendFile(__dirname+'/public/index.html'));
app.listen(8080, () => console.log('App is on.') );