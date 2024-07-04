Most of articles which explain Karatsuba skip a lot of details, and transitions are not always strict and clear
Follow this explanation
https://www.youtube.com/watch?v=SlMVJOYLmkc, this is the most complete explanation from the guy who [really understand algos](https://en.wikipedia.org/wiki/Andrey_Stankevich)

There is a popular article about Karatsuba algorithm in javascript
https://patrickkarsh.medium.com/karatsuba-multiplication-javascript-mastering-algorithms-fa628eb6a840

You can follow it, but [that implementation](https://github.com/parrker/karatsuba/blob/master/karatsuba.js) does not support long arithmetic and contains logic which multiplies 10**n by number, which is slow, so this implementation negate the whole approach

[Here](http://www.ccas.ru/personal/karatsuba/divcen.pdf) Karatsuba explains the history behind this algorythm
