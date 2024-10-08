const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const port = 8000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
