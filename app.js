const express = require('express');

const app = express();
const port = 3030;

const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(port, () => {
    console.log('Server started on port: ' + port)
});

app.use(function(req, res, next) {
  res.status(404);

  // default to plain-text. send()
  res.type('txt').send('Not found');
});




