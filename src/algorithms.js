var priorityqueue = require('./prioritQueue.js');

function dijkstra(G, s, t = null) {
    var Q = new priorityqueue.PriorityQueue();
    Q.push(s, 0);
    var dist = {};
    var prev = {};
    dist[s] = 0;

    while (Q.size() > 0) {
        var u = Q.pop();

        if (t != null && u == t) {
            return dist[t]
        }
        G.adj(u).forEach(function ([v, w]) {
            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + w;
            if (alt < d) {
                dist[v] = alt;
                prev[v] = u;
                Q.push(v, alt)
            }
        })
    }
}

function eucledian(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2), Math.pow(a.y - b.y, 2))
}

function Astar(G, s, t, heuristic = eucledian) {
    var Q = new priorityqueue.PriorityQueue();
    Q.push(s, 0);
    var dist = {};
    var prev = {};
    var visited = {};
    dist[s] = 0;

    while (Q.size() > 0) {
        var u = Q.pop();

        if (u == t) {
            return
        }
        visited[u] = true;

        G.adj(u).forEach(function ([v, w]) {
            if (visited[v] == true)
                return;
            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + w;
            if (alt < d) {
                dist[v] = alt;
                prev[v] = u;
                Q.push(v, alt + heuristic(G.pos(v),G.pos(t)))
            }
        })
    }
}

//ALT=(A*,landmarks,triangle inequality)
function ALT(G, s, t, pi) {

}

function preprocessHL(G) {

}

function HL(pi, s, t) {

}

exports.dijkstra = dijkstra;
exports.Astar = Astar;