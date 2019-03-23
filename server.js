const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

const indexRoutes = ['/', '/articles', '/tutorials', '/about'];
app.get(indexRoutes, (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.listen(8080, () => console.log('App is on.'));
