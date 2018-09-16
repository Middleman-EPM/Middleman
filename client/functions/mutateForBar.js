export default mutateForBar = (obj) => {
  let store = {}
  store.totalDuration = 0
  store.totalRoutes = 0
  // console.log(obj)
  let barChartData = []
  for (let routes in obj) {
    store[routes] = {};
    for (let methods in obj[routes]) {

      store[routes][methods] = {}
      store[routes][methods].duration = 0
      store[routes][methods].percentage = 0
      store.totalRoutes += 1

      if (obj[routes][methods][0] !== undefined) {
        obj[routes][methods][0].forEach(middleware => {
          let name = Object.keys(middleware)
          name.forEach(name => {
            barChartData.push({ group: routes + '_' + methods, category: name, measure: middleware[name].duration })
          })

          store[routes][methods].duration += middleware[name[0]].duration
          store.totalDuration += middleware[name[0]].duration
        })
      }
    }
  }

  for (let routes in store) {
    for (const method in store[routes]) {
      store[routes][method].percentage = (store[routes][method].duration / store.totalDuration).toFixed(2)
    }
  }
  let pieChartData = []
  for (let routes in store) {
    for (const method in store[routes]) {
      if (store[routes][method].percentage > 0) {
        pieChartData.push({ category: routes + '_' + method, measure: store[routes][method].percentage })
      }
    }
  }


  let forceGraph = []
  let node = [];
  let group = {}

  for (const route in obj) {
    //console.log(route)
    // console.log(route)
    if (route !== '/') {
      Object.keys(obj[route]).forEach(method => {

        //console.log(method)

        const nodes1 = { source: '/', target: route, type: "licensing" }
        const nodes2 = { source: route, target: route + '_' + method, type: "resolved" }

        forceGraph.push(nodes1)
        forceGraph.push(nodes2)

        for (const middleware in obj[route][method]) {

          obj[route][method][middleware].forEach((element, index) => {
            let children;
            group[`${route}_${method}`] = 1
            node.push({ id: route + "_" + method + "_" + Object.keys(element)[0] })

            if (index === 0) {
              children = { source: route + '_' + Object.keys(obj[route])[0], target: Object.keys(element)[0] + '_' + route, type: "licensing" }
            }
            else {
              children = { source: Object.keys(obj[route][method][middleware][index - 1]) + '_' + route, target: Object.keys(element)[0] + '_' + route, type: "licensing" }
              //Object.keys(obj[route])[0]
            }
            forceGraph.push(children)

          })
        }
      })
    }
  }
  let arr = Object.keys(group)
  arr.forEach((e, i) => {
    group[e] = i + 1;
  })
  // console.log(group)
  node.forEach(obj => {
    let split = obj.id.split("_")
    let first = split[0]
    let substring = split[0] + "_" + split[1]


    // console.log(arr[0]+"_"+arr[1])
    // console.log(obj.id)
    // console.log(substring)
    // console.log(obj.id.includes(substring))
    if (obj.id.includes(substring)) obj[`group`] = group[substring]
    // console.log({"id": first, group: })

  })
  node.forEach(obj => {
    for (let key in obj) {
      key = JSON.stringify(key)
    }
  })

  let currGroup = node[0].group;
  //console.log(node)

  node.forEach((obj, i) => {
    let split = obj.id.split("_");
    let substring = split[0] + "_" + split[1];

    if (obj.group === currGroup) {
      node.splice(i, 0, {
        id: substring,
        group: currGroup
      })
      node.splice(i, 0, {
        id: split[0],
        group: currGroup
      })
      currGroup += 1
    }
  })
  //  console.log(JSON.stringify(node))
  // return forceGraph
  let zoomGraph = [];
  node.forEach((e, i) => {
    // console.log(e.id)
    if (i === 0) {
      zoomGraph.push({ source: e.id, target: node[i + 1].id, value: 4 })
    } else if (i > 1 && e.group === node[i - 1].group) {
      zoomGraph.push({ source: node[i - 1].id, target: e.id, value: 4 })
    }
  })
  zoomGraph.forEach(e => {
    if (zoomGraph.includes(e.source)) delete e
  })
  // console.log(JSON.stringify(zoomGraph))
  // console.log(pieChartData)

  return barChartData
  // return store
}