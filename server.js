const app = require('./app')

//!------------------------------ SERVER  -------------------------
const port = 8000;
app.listen(port, '127.0.0.1', () => {
  console.log(`server running on port ${port}🎈.......`);
});
