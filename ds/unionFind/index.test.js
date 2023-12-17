import { expect, test, describe } from "bun:test";

import { UnionFind } from ".";

describe('UnionFind', () => {
    test("findRoot works", () => {
        const uf = new UnionFind(10);

        uf.union(1, 2);
        uf.union(2, 3);
        uf.union(3, 4);
        uf.union(4, 5);

        expect(uf.findRoot(1)).toBe(5);
    });
});

