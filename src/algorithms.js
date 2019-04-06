function dijkstra (G, s, t=null) {
	var Q = queue()
	Q.add(s,0)
	var dist = {}
	var prev = {}
	dist[s] = 0

	

	while(!Q.size()){
		var u = Q.pop()

		if (t != null && u == t) {
			return 
		}

		for (v in G[u])) {
			var alt = dist(v)+dist(u,v)
			if (alt < dist(v)) {
				dist[v] = alt
				prev[v] = u
			}
		}
	}
}