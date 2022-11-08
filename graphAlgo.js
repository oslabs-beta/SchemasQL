function Graph() {
  this.nodes = new Map();
  this.size = 0;
}

Graph.prototype.addNode = function (node) {
  this.nodes.set(node.name, node);
  ++this.size;
};

Graph.prototype.addConnection = function (
  startNode,
  fKeyName,
  destinationNode
) {
  if (!this.nodes.has(startNode.name) || !this.nodes.has(destinationNode.name))
    return;

  const newEdgesArray = [
    ...this.nodes.get(startNode.name).edges,
    { [fKeyName]: destinationNode.name },
  ];

  this.nodes.set(startNode.name, {
    ...this.nodes.get(startNode.name),
    edges: newEdgesArray,
  });
};

Graph.prototype.removeConnection = function () {};

Graph.prototype.removeNode = function () {};



// ######### Test cases
const node1 = {
  name: 'planets',
  primaryKey: '_id',
  attributeNames: ['rotation_period', 'orbital_period'],
  edges: [],
};

const node2 = {
  name: 'species',
  primaryKey: '_id',
  attributeNames: ['name', 'weight', 'height'],
  edges: [],
};

const node3 = {
  name: 'people',
  primaryKey: '_id',
  attributeNames: ['name', 'species_id', 'occupation'],
  edges: [],
};

const graph = new Graph();

graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);

graph.addConnection(node3, 'species_id', node2);
console.log(graph.nodes.get('people'));
