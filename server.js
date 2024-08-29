const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB connection successfull');
});

const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
