import React, {Component} from 'react';
import ForceLayout from './ForceLayout';

const graphData = {
  nodes: [
    { id: '/route', showChildren: true, show: true, group: 1 },
    { id: 'test', showChildren: true, show: true, group: 1},
    { id: 'bodyParser', showChildren: true, show: true, group: 2 },
    { id: 'cookieParser', showChildren: true, show: true, group: 2 },
    { id: 'authentication', showChildren: true, show: true, group: 2 },
    { id: 'test2', showChildren: true, show: true, group:2 },
    { id: 'Father4', showChildren: true, show: true, group: 2 },
    { id: 'Father5', showChildren: true, show: true, group: 2 },
    { id: 'Father6', showChildren: true, show: true, group: 2 },
    { id: 'Father7', showChildren: true, show: true, group: 2 },
    { id: 'Father8', showChildren: true, show: true, group: 2 },
    { id: 'Son1', showChildren: true, show: true, group: 3 },
    { id: 'Son2', showChildren: true, show: true, group: 3 },
    { id: 'Son3', showChildren: true, show: true, group: 3 },
    { id: 'Son4', showChildren: true, show: true, group: 3 },
    { id: 'Son5', showChildren: true, show: true, group: 3 },
    { id: 'Son6', showChildren: true, show: true, group: 3 },
    { id: 'Son7', showChildren: true, show: true, group: 3 },
    { id: 'Son8', showChildren: true, show: true, group: 3 },
    { id: 'Son9', showChildren: true, show: true, group: 3 },
    { id: 'Son10', showChildren: true, show: true, group: 3 },
    { id: 'Son11', showChildren: true, show: true, group: 3 },
    { id: 'Son12', showChildren: true, show: true, group: 3 },
    { id: 'Son13', showChildren: true, show: true, group: 3 },
    { id: 'Son14', showChildren: true, show: true, group: 3 },
    { id: 'Son15', showChildren: true, show: true, group: 3 },
    { id: 'Son16', showChildren: true, show: true, group: 3 },
  ],
  links: [
    { source: 'test', show: true, target: 'test2', value: 3},
    { source: 'test', show: true, target: '/route', value: 5},
    { source: '/route', show: true, target: 'bodyParser', value: 5 },
    { source: '/route', show: true, target: 'cookieParser', value: 5 },
    { source: '/route', show: true, target: 'authentication', value: 5 },
    { source: '/route', show: true, target: 'Father4', value: 5 },
    { source: '/route', show: true, target: 'Father5', value: 5 },
    { source: '/route', show: true, target: 'Father6', value: 5 },
    { source: '/route', show: true, target: 'Father7', value: 5 },
    { source: '/route', show: true, target: 'Father8', value: 5 },
    { source: 'bodyParser', show: true, target: 'authentication', value: 12 },
    { source: 'bodyParser', show: true, target: 'Son3', value: 12 },
    { source: 'cookieParser', show: true, target: 'Son2', value: 9 },
    { source: 'cookieParser', show: true, target: 'Son4', value: 3 },
    { source: 'authentication', show: true, target: 'Son5', value: 3 },
    { source: 'authentication', show: true, target: 'Son7', value: 3 },
    { source: 'Father4', show: true, target: 'Son6', value: 3 },
    { source: 'Father4', show: true, target: 'Son8', value: 3 },
    { source: 'Father5', show: true, target: 'Son9', value: 3 },
    { source: 'Father5', show: true, target: 'Son10', value: 3 },
    { source: 'Father6', show: true, target: 'Son11', value: 3 },
    { source: 'Father6', show: true, target: 'Son12', value: 3 },
    { source: 'Father7', show: true, target: 'Son13', value: 3 },
    { source: 'Father7', show: true, target: 'Son14', value: 3 },
    { source: 'Father8', show: true, target: 'Son15', value: 3 },
    { source: 'Father8', show: true, target: 'Son16', value: 3 },
  ],
};
class RouteMap extends Component{

render() {
  return <div className="forceBox" style={{ boxShadow: '0px 1px 5px 1px', height: '60%', width: '60%', position: 'absolute' }}>
    <ForceLayout
      nodeLinkObject={JSON.parse(JSON.stringify(graphData))} // primary prop
      colorFunction={node => ({ 1: 'red', 2: 'black', 3: 'blue' }[node.group])}
      multiOptionsClick={{
        keyToLookFor: 'group', // based on what keys the functions are to be given
        2: { // group with number 2 has a single function called create and is collapsible
          Create: {
            func: node => {
              console.log('create clicked on node', node)
            },
            color: '#C64944',
          },
        },
        3: { // group with number 3 has 2 functions and is not collapsible
          Edit: {
            func: node => {
              console.log('edit Clicked on node', node);
            },
            color: '#E76C32',
          },
          Delete: {
            func: node => {
              console.log('delete clicked on node', node);
            },
            color: '#8571AB',
          },
        },
        collapsibles: [1, 2], // nodes with keyToLookFor value these will include auto collapse option
      }}
      // collapseOnClick // if multiOptionClick not set and this prop enabled , all nodes will be collapsible
      nodeClicked={() => { }} // works when multiOptionClick and collapseOnClick not set
      showLabelOnHover={{ // if set a tooltip shows if not the nodes are labled by default by name or id
        id: 'ID-modified',
        group: 'Type',
      }}
      // legend={{ GrandFather: 'red', Father: 'green', Son: 'purple' }}
      connectionStrength={0.05} // the more the value the lesser closely the nodes are packed
      circleIncreseFactor={15} // increase per increase in group
      circleRadius={5} // the base circle radius
      treeView={false} // put this true to see tree view
      // treeView
      fillType="White" // "White" (yes big W) or according to the color function
    />
  </div>
}
}
export default RouteMap;
