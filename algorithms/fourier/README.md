Multiplication of 2 long numbers A, B takes O(n^2) operations

Lets say that multiplication of 2 numbers is a multiplication of 2 polynomials

A: 57 = 5x + 7 
B: 1337 = 1x^3 + 3x^2 + 3x^1 + 7

(A + Bx^n * C + Dx^n) = A*B + (A*D + B*C)* x^n + B*D * x^2n
From first look we need 4 operations A*B, A*D, B*C, B*D
Karatsuba says that we need 3 operations:
1. (A+B) * (C+D) = A*C + (A*D + B*C) + B*D
1. A*C
1. B*D