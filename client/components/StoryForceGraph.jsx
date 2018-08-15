import React from 'react';
import InteractiveForceGraph from './utilComponents/InteractiveForceGraph';
import ForceGraphNode from './utilComponents/ForceGraphNode';
import ForceGraphLink from './utilComponents/ForceGraphLink';
import lesMisJSON from './utilComponents/utils/les-miserables.json';
import * as d3 from '../d3/d3';

const StoryForceGraph = () => {
  const scale = d3.scale.category20();
  return (
    <InteractiveForceGraph
      highlightDependencies
    >
      {lesMisJSON.nodes.map(node => (
        <ForceGraphNode
          key={node.id}
          fill={scale(node.group)}
          node={{ ...node, radius: 7 }}
          
        />
      ))}
      {lesMisJSON.links.map(link => (
        <ForceGraphLink
          key={`${link.source}=>${link.target}`}
          link={{ ...link, value: 2 }}        />
      ))}
    </InteractiveForceGraph>
  );
}

export default StoryForceGraph;
