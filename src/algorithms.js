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

        for (v in G.adj[u]) {

            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + G.dist(u, v)
            if (alt < d) {
                dist[v] = alt
                prev[v] = u
                q.push(v, alt)
            }
        }
    }
}

function eucledian(a, b) {
    [x1, y1] = a
        [x2, y2] = b
    return Math.sqrt(Math.pow(x1 - x2, 2), Math.pow(y1 - y2, 2))
}

function Astar(G, s, t, pi =) {
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

        G.adj[u].forEach(function (e) {
            if (visited[v] == true)
                return

            d = (dist[v] == undefined) ? Infinity : dist[v];
            var alt = dist[u] + G.dist(u, v)
            if (alt < d) {
                dist[v] = alt
                prev[v] = u
                q.push(v, alt+pi(v,t))
            }
        })
    }
}