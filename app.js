const express = require('Express');
const app = express();
const tourRoutes = require('../NATOURS/public/routers/tourRoutes')
const userRoutes = require('../NATOURS/public/routers/userRoutes')

const fs = require('fs');
const morgan = require('morgan');

//---------------------------- 1) MIDDLEWEARS --------------------------------
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
//app.use() acts as a middleware in express apps. Unlike app.get() and app.post() or so, you actually can use app.use() without specifying the request URL. In such a case what it does is, it gets executed every time no matter what URL's been hit.
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-sample.json`)
);
app.use("/app/v1/tours", tourRoutes)
app.use("/app/v1/users", userRoutes)

//------------------------------ 4) START SERVER  --------------------
const port = 8000;
app.listen(port, '127.0.0.1', () => {
  console.log(`server running on port ${port}....`);
});
