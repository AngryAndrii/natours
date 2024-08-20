const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

const port = 8000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
