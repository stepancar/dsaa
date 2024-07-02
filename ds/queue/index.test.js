'use strict'
import { expect, test, describe } from "bun:test";
import { Queue } from ".";

describe('Queue', () => {
    test("allows to push and pop", () => {
        const q = new Queue();
        q.push(1)
        q.push(2)
        q.push(3)
        expect(q.pop()).toBe(1);
        expect(q.pop()).toBe(2);
        expect(q.pop()).toBe(3);
        expect(q.pop()).toBe(null);
        q.push(1)
        expect(q.pop()).toBe(1);
        expect(q.pop()).toBe(null);
        q.push(2)
        q.push(3)
        expect(q.pop()).toBe(2);
        expect(q.pop()).toBe(3);
    });
});
