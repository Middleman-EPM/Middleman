const db = require('./connect');

const controller = {
  addHash: (req, res, next) => {
    const query = 'INSERT INTO hash (api_key) VALUES($1) RETURNING *';
    const values = [`${req.body.hash}`];
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
    const routes = Object.keys(req.body.routes);
    let values = ''
    routes.forEach((route,i) => {
      values+=`(${res.locals.hash_id}, '${route}'), `
    })
    values = values.substring(0, values.length -2);
    const query = `INSERT INTO routes (f_key, route) VALUES ` + values + ` RETURNING *`;
    db.query(query, (err, result) => {
      if (err) console.log('Error adding routes to table')
      else {
        result.rows.forEach((e,i)=> res.locals[e.route + "_" +e.f_key] = e._id )
         next()
      }
    })
  },
  addMethod: (req, res, next) => {
    const routes = Object.keys(req.body.routes)
    let actualValues = '';
    routes.forEach((route, i) => {
      let values = ''
      for(let method in req.body.routes[route]){
        values += `('${method}', ${res.locals[route +"_"+res.locals.hash_id]}), `
      }
      actualValues += values;
    })
    actualValues = actualValues.substring(0, actualValues.length - 2);
    const query = `INSERT INTO methods (method, f_key) VALUES ` + actualValues + ` RETURNING *`;
    db.query(query, (err, result) => {
      if (err) console.log('Error adding methods to table')
      else {
        console.log('this is result.rows',result.rows)
        result.rows.forEach((e, i) => {
          res.locals[e.method + "_" + e.f_key] = e._id
          console.log(res.locals)

        })

        next()
      }
    })
  },
  addMiddleware: (req, res, next) => {
    const routes = Object.keys(req.body.routes)
    let actualValues = '';
    console.log('im running in addMiddleware')
    console.log(res.locals)
    routes.forEach((route, i) => {
      let holdValue = ''
      for (let method in req.body.routes[route]) {
        let values = ''
        if (Array.isArray(req.body.routes[route][method]) && req.body.routes[route][method].length>0) {
          req.body.routes[route][method].forEach(middleware => {
            for(let key in middleware){
              values += `('${key}', ${res.locals[method + '_' + res.locals[route + "_" + res.locals.hash_id]]}), `;
            }
          });
        }
        holdValue += values;
      }
      actualValues += holdValue;
    })
    // console.log(actualValues)
    actualValues = actualValues.substring(0, actualValues.length -2);
    const query = `INSERT INTO middlewares (middleware, f_key) VALUES ` + actualValues + ` RETURNING *`;
    db.query(query, (err, result) => {
      if (err) console.log('Error adding middleware into table');
      else {
        result.rows.forEach((e, i) => {
          res.locals[e.middleware + '_' + e.f_key] = e._id;
        });
        next();
      }
    });
  },
  addTimes: (req, res) => {
    const routes = Object.keys(req.body.routes)
    let actualValues = '';
    routes.forEach((route, i) => {
      let holdValue = ''
      for (let method in req.body.routes[route]) {
        let values = ''
        if (Array.isArray(req.body.routes[route][method]) && req.body.routes[route][method].length > 0) {
          req.body.routes[route][method].forEach(middleware => {
            let name = Object.keys(middleware)
            let times =middleware[name[0]]
            let routeid = res.locals[route + '_' + res.locals.hash_id];
            let methodid = res.locals[method+"_" +routeid];
            values += `(${times.start}, ${times.end}, ${times.duration}, ${res.locals[name[0] + '_' + methodid]}), `;
          });
        }
        holdValue += values;
      }
      actualValues += holdValue;
    })
    actualValues = actualValues.substring(0, actualValues.length - 2);

    const query = `INSERT INTO times VALUES ` + actualValues + ` RETURNING *`;
    db.query(query, (err, result) => {
      if (err) console.log('Error adding times into table');
      else {
        console.log('success')
        res.send('success')
      }
    });
  },
}

module.exports = controller;