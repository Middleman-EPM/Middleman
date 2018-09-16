export default mutateForCollapsible = (obj) => {
  const store = {
    name: '/',
    children: []
  }
  const master = []
  for (let routes in data) {
    let parent = { name: routes, children: [] }

    for (methods in data[routes]) {
      if (routes !== '/') {
        if (data[routes][methods].length) {
          let secondLayer = { name: methods, children: [] }
          const start = { name: 'start', children: [] }
          const end = { name: 'end', children: [] }
          const startSorted = data[routes][methods][0].slice(0)
          const endSorted = data[routes][methods][0].slice(0).reverse()
          startSorted.sort((a, b) => {
            return a[Object.keys(a)[0]].start - b[Object.keys(b)].start
          })
          startSorted.forEach(middleware => {
            start.children.push({ name: Object.keys(middleware)[0] })
          })
          endSorted.forEach(middleware => {
            end.children.push({ name: Object.keys(middleware)[0] })
          })
          secondLayer.children.push(start)
          secondLayer.children.push(end)
          console.log(secondLayer.children[1])
          parent.children.push(secondLayer)
          store.children.push(parent)
        } else {
          store.children.push({ name: routes })
        }
      }
    }
  }
  store.children.forEach((e, i) => {
    if ((i < store.children.length - 1) && (store.children[i + 1].name === e.name)) {
      store.children.splice(i, 1)
    }
  })
  return JSON.stringify(store)
}