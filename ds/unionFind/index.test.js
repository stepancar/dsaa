import { expect, test, describe } from "bun:test";

import { UnionFind } from ".";

describe('UnionFind', () => {
    test("is connected", () => {
        const uf = new UnionFind(10);

        expect(uf.numberOfComponents).toBe(10)
        uf.union(4, 3);
        expect(uf.numberOfComponents).toBe(9)
        uf.union(3, 8);
        uf.union(6, 5);
        expect(uf.numberOfComponents).toBe(7)
        uf.union(9, 4);
        uf.union(1, 2);

        expect(uf.connected(8,9)).toBe(true);
        expect(uf.connected(5,4)).toBe(false);
        uf.union(5, 0);
        uf.union(7, 2);
        uf.union(6, 1);
        uf.union(7, 3);
        expect(uf.connected(5,4)).toBe(true);
        expect(uf.numberOfComponents).toBe(1);
    });
});

