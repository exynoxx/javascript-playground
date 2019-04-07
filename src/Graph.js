class Graph {
    constructor (){
        this.nodes = {}
    }

    addEdge(u,v,w){
        this.nodes[u].append([v,w])
    }

    //adj list
    adj(u) {
        return this.nodes[u]
    }

    //node coordinates
    coords(u) {
        return [0,0]
    }
}