function dijkstra(G, s, t = null) {
    var Q = new PriorityQueue();
    Q.push(s, 0);
    var dist = {};
    var prev = {};
    dist[s] = 0;

    while (!Q.size()) {
        var u = Q.pop();

        if (t != null && u == t) {
            return
        }

        G.adj[u].forEach(function ([v, w]) {

            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + w
            if (alt < d) {
                dist[v] = alt
                prev[v] = u
                Q.push(v, alt)
            }
        }
    }
}

function eucledian(a, b) {
    var [x1, y1] = a
    var [x2, y2] = b
    return Math.sqrt(Math.pow(x1 - x2, 2), Math.pow(y1 - y2, 2))
}

function Astar(G, s, t, heuristic = eucledian) {
    var Q = new PriorityQueue();
    Q.push(s, 0);
    var dist = {};
    var prev = {};
    var visited = {};
    dist[s] = 0;

    while (!Q.size()) {
        var u = Q.pop();

        if (u == t) {
            return
        }

        visited[u] = true;

        G.adj[u].forEach(function ([v, w]) {
            if (visited[v] == true)
                return;

            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + w;
            if (alt < d) {
                dist[v] = alt;
                prev[v] = u;
                Q.push(v, alt + heuristic(v, t))
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