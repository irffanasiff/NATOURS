const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-sample.json`) //?The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
  );
  
 exports.getAllUsers = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined',
    });
  };
 exports.getUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined',
    });
  }; 
 exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined',
    });
  };
 exports.updateUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined',
    });
  };
 exports.deleteUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined',
    });
  };