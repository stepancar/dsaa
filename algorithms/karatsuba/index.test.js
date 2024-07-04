import { describe, test, expect } from 'bun:test'
import {karatsuba} from '.'

describe('karatsuba', () => {
    test('works', () => {
        expect(karatsuba([1,3,4], [4,6])).toBeArray([6,1,6,4])
        expect(karatsuba([1,2,3,4], [5,6,7,8])).toBeArray([7,0,0,6,6,5,2])
    })
});
