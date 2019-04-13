class Graph {
    constructor (){
        this.nodes = {}
        this.position = {}
    }

    addVertex(name,x,y) {
        this.nodes[name] = []
        this.position[name] = {x:x,y:y}
    }

    addEdge(u,v,w){
        if (this.nodes[u] == undefined) {
            this.nodes[u] = []
            this.position[u] = {x:0,y:0}
        }
        this.nodes[u].push([v,w])
    }

    //adj list
    adj(u) {
        return this.nodes[u]
    }

    pos(u) {
        return this.position[u]
    }

    //node coordinates
    coords(u) {
        return [0,0]
    }
}
exports.Graph = Graph;