import express from 'express'
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")));

app.get('/users', function (req, res) {
  res.json([
    {id: 12312, firstName: "Ramu", lastName: "nathan", email: "ramunathan@gmail.com", phone: "091-9289384"},
    {id: 12313, firstName: "Anbu", lastName: "king", email: "anbuking@gmail.com", phone: "091-827839"}
  ]);
});


app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  else {
    open("http://localhost:" + port);
  }
});
