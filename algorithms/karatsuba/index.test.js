import { describe, test, expect } from 'bun:test'
import {multiply} from '.'

describe('karatsuba', () => {
    test('multiplies positive numbers', () => {
        expect(multiply([1], [2]).toString()).toBe([2].toString())
        expect(multiply([10], [2]).toString()).toBe([2, 0].toString())
        expect(multiply([1,3,4], [4,6]).toString()).toBe([6,1,6,4].toString())
        expect(multiply([1,2,3,4], [5,6,7,8]).toString()).toBe([7,0,0,6,6,5,2].toString())
        expect(multiply([1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1]).toString()).toBe([1,2,1,9,3,2,6,3,1,1,1,2,6,3,5,2,6,9].toString())
    })
});
