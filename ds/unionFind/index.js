export class UnionFind {
    size = 0;
    data = [];
    constructor(size) {
        this.size = size;

        this.data = Array.from({ length: size }, (_, i) => i);
    }

    findRoot(index) {
        if (this.data[index] === index) {
            return index;
        }

        this.data[index] = this.findRoot(this.data[index]);
        return this.data[index];
    }

    union(index1, index2) {
        const root1 = this.findRoot(index1);
        const root2 = this.findRoot(index2);

        if (root1 === root2) {
            return;
        }

        this.data[root1] = root2;
    }

    isConnected(index1, index2) {
        return this.findRoot(index1) === this.findRoot(index2);
    }
}
