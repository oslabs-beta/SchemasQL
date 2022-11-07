function Graph() {
  this.nodes = new Map();
  // this.nodes = new Map<type, >()
}

Graph.prototype.addNode = function (node) {
  this.nodes.set(node, []);
};

Graph.prototype.addConnection = function (startNode, destinationNode) {
  if (!this.nodes.has(startNode) || !this.nodes.has(destinationNode)) return;

  this.nodes[startNode].push(destinationNode);
};

Graph.prototype.removeConnection = function (startNode, destinationNode) {
  if (!this.nodes.has(startNode) || !this.nodes.has(destinationNode)) return;

  this.nodes[startNode].find((e, i) => )

};

Graph.prototype.removeNode = function (node) {};

const node1 = {
  name: 'planets',
  primaryKey: '_id',
  fKeys: [],
  attributeNames: ['rotation_period', 'orbital_period'],
};

const node2 = {
  name: 'species',
  primaryKey: '_id',
  fKeys: ['homeworld_id'],
  attributeNames: ['name', 'weight', 'height'],
};

const node3 = {
  name: 'people',
  primaryKey: '_id',
  fKeys: ['species_id', 'homeworld_id'],
  attributeNames: ['name', 'occupation'],
};

const graph = new Graph();

graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);

console.log(graph.nodes);
