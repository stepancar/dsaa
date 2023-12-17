'use strict'
import { expect, test, describe } from "bun:test";
import { Heap } from ".";

describe('Heap', () => {
    test("top returns min", () => {
        const heap = new Heap();

        heap.push(5);
        heap.push(3);
        heap.push(9);
        heap.push(7);
        heap.push(2);

        expect(heap.top()).toBe(2);
    });

    test("pop works if one item", () => {
        const heap = new Heap();

        heap.push(5);

        heap.pop();

        expect(heap.top()).toBe(undefined);
    });

    test("pop works", () => {
        const heap = new Heap();

        heap.push(5);
        heap.push(3);
        heap.push(9);
        heap.push(7);
        heap.push(2);

        heap.pop();

        expect(heap.top()).toBe(3);
    });
});