const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

const indexRoutes = [
  '/',
  '/articles',
  '/tutorials',
  '/about',
  '/vue-for-beginners',
  '/scalable-javascript',
  '/vue-tutorial-1',
  '/vue-tutorial-2',
];
app.get(indexRoutes, (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.listen(8080, () => console.log('App is on.'));
