const express = require('Express');
const app = express();
const tourRouter = require('./routes/tourRouter')
const userRouter = require('./routes/userRouter')

const morgan = require('morgan');

//?---------------------------- 1) MIDDLEWEARS --------------------------------
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('hello from the middlewear 👋🏻');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//*------------------------------ 2) ROUTES MIDDLEWEARS  --------------------

app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

//!------------------------------ 3) START SERVER  -------------------------
const port = 8000;
app.listen(port, '127.0.0.1', () => {
  console.log(`server running on port ${port}....`);
});
