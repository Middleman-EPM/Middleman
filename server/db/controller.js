const db = require('./connect');

const controller = {
  addHash: (req, res, next) => {
    const query = 'INSERT INTO hash (api_key) VALUES($1) RETURNING *';
    const values = [`${req.body.hash}`]//TBD;
    db.query(query, values, (err, result) => {
      if(err) console.log('Error adding api_key to table')
      console.log(results.rows[0])
    })
    next();
  },
  addRoutes: (req, res, next) => {

  },
  addMiddleware: (req, res, next) => {

  },
  addTimes: (req, res, next) => {

  },
}

module.exports = controller;