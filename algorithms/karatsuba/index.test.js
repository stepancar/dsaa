import { describe, test, expect } from 'bun:test'
import {karatsuba} from '.'

describe('karatsuba', () => {
    test('works', () => {
        expect(karatsuba([4,6], [1,3,4])).toBe([6,1,6,4])
    })

    // test('works2', () => {
    //     expect(karatsuba([1,2,3,4], [5,6,7,8])).toBe([7,0,0,7,6,5,2])
    // })
});
