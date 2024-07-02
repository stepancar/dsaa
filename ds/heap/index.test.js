'use strict'
import { expect, test, describe } from "bun:test";
import { Heap } from ".";
import { heappush, heappop } from "./heap";

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

describe.only('heappush', () => {
    test('works', () => {

        const heap = [];

        heappush(heap, 19);
        heappush(heap, 42);
        heappush(heap, 3);
        heappush(heap, 23);
        heappush(heap, 13);
        heappush(heap, 1);

        console.log(heap);

        expect(heap[0]).toBe(1);
    });

    test('works pop', () => {

        const heap = [];

        heappush(heap, 19);
        heappush(heap, 42);
        heappush(heap, 3);
        heappush(heap, 23);
        heappush(heap, 13);
        heappush(heap, 1);

        console.log(heap);

        expect(heappop(heap)).toBe(1);
        expect(heappop(heap)).toBe(3);
        expect(heappop(heap)).toBe(13);
        expect(heappop(heap)).toBe(19);
        expect(heappop(heap)).toBe(23);
        console.log(heap);
        expect(heappop(heap)).toBe(42);
    });
});
