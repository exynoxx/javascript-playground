var algorithms = require('./algorithms.js');
var graph = require('./Graph.js');

function run() {
    var G = new graph.Graph();
    G.addEdge(1,2,5);
    G.addEdge(2,3,17);
    G.addEdge(3,4,2);
    G.addEdge(2,4,2);

    console.log(algorithms.dijkstra(G,1,4))
}
run();
