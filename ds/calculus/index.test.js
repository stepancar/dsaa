import { describe, it, expect } from 'bun:test'
import { calculate, toPolishNotation } from './index'


describe('calculate', () => {
    it('should calculate the result of a postfix expression', () => {
        const q = [3, 4, '+', 2, '*', 7, '/'];
        const result = calculate(q);
        expect(result).toBe(2);
    });

    it('should handle multiple operations', () => {
        const q = [5, 3, '+', 2, '*', 4, '-'];
        const result = calculate(q);
        expect(result).toBe(12);
    });

    it('should handle functions', () => {
        const q = [Math.PI, 'sin'];
        const result = calculate(q);
        expect(result).toBeCloseTo(Math.sin(Math.PI), 5);
    });
});

describe('toPolishNotation', () => {
    it('should convert an infix expression to Polish notation', () => {
        const expression = [3, '+', 2, '*', '(', 6, '-', 4, ')'];
        const result = toPolishNotation(expression);
        console.log(result);
        expect(result).toEqual([3,2,6,4 ,'-', '*', '+']);
    });
});

describe('e2e', () => {
    it('should calculate the result of a complex expression', () => {
        const expression = [3, '+', 2, '*', '(', 6, '-', 4, ')'];
        const polish = toPolishNotation(expression);
        const result = calculate(polish);
        expect(result).toBe(7);
    });
});
