const db = require('./connect');
let hash_id, route_id, middleware_id;
const controller = {
  addHash: (req, res, next) => {
    const query = 'INSERT INTO hash (api_key) VALUES($1) RETURNING *';
    const values = [`${req.body.hash}`]//TBD;

    db.query(query, values, (err, result) => {
        if(err) console.log('Error adding api_key to table')
        else {
          res.locals.hash_id = result.rows[0]._id;
          console.log('this is running in addHash ',result.rows[0]._id);
          next()
        }
      })

  },
  addRoute: (req, res, next) => {
    console.log('this is add route',res.locals)
    const query = 'INSERT INTO routes (route, foreign_key) VALUES($1, $2) RETURNING *';
    const values = [`${req.body.route}`, `${res.locals.hash_id}`]//TBD;
    // console.log(req.body.route)
     db.query(query, values, (err, result) => {
      console.log(res.locals)
      if (err) console.log('Error adding routes to table')
      else {
        res.locals.route_id = result.rows[0]._id;
        next()
      }
    })
  },
  addMiddleware: (req, res, next) => {
    const query = 'INSERT INTO middlewares (middleware) VALUES($1) RETURNING *';
    const values = [`${req.body.middleware}`]//TBD;
    db.query(query, values, (err, result) => {
      if (err) console.log('Error adding api_key to table')
      else {
        req.body.middleware_id = result.rows[0]._id;
        next();
      }
    })
  },
  addTimes: (req, res, next) => {
    const query = 'INSERT INTO times (start_time, end_time, duration) VALUES($1, $2, $3) RETURNING *';
    const values = [`${req.body.times[0]}`, `${req.body.times[1]}`, `${req.body.times[2]}`];//TBD;
    db.query(query, values, (err, result) => {
      if (err) console.log('Error adding times to table')
      else {
        res.send('success!')
        next()
      }
    })
  },
}

module.exports = controller;