/**
 * Union find with quick union and path compression
 */
export function UnionFind(size) {
    const parentOf = Array.from({ length: size }, (_, i) => i);
    const sz = Array.from({ length: size }, () => 1);

    let numberOfComponents = size;

    function findRoot(i) {
        while (i !== parentOf[i]) {
            i = parentOf[i]
        }

        return i;
    }

    function compressPath(i, r) {
        while (i !== r) {
            const parent = parentOf[i];
            parentOf[i] = r;
            i = parent;
        }
    }
    
    function root(i) {
        const r = findRoot(i);
        compressPath(i, r);
        return r;
    }

    function union(p, q) {
        const root1 = root(p);
        const root2 = root(q);

        if (root1 === root2) {
            return;
        }

        if (sz[root1] < sz[root2]) {
            parentOf[root1] = root2;
            sz[root2] += sz[root1];
        } else {
            parentOf[root2] = root1;
            sz[root1] += sz[root2];
        }
        numberOfComponents--;
    }

    function connected(p, q) {
        return root(p) === root(q);
    }

    return {
        connected,
        union,
        sz,
        root,
        get numberOfComponents() {
            return numberOfComponents;
        }
    }
}
