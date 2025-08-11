export function calculate(q) {
    let stack = []
    while (q.length > 0) {
        const item = q.shift();

        if (typeof item === 'number') {
            stack.push(item);
        } else {
            if (isOperator(item)) {
                const b = stack.pop();
                const a = stack.pop();

                switch (item) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(a - b);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(a / b);
                        break;
                    case '%':
                        stack.push(a % b);
                        break;
                }
            } else if (isFunction(item)) {
                const a = stack.pop();
                switch (item) {
                    case 'sin':
                        stack.push(Math.sin(a));
                        break;
                    case 'cos':
                        stack.push(Math.cos(a));
                        break;
                    case 'tan':
                        stack.push(Math.tan(a));
                        break;
                    case 'log':
                        stack.push(Math.log(a));
                        break;
                    case 'exp':
                        stack.push(Math.exp(a));
                        break;
                }
            }
        }
    }
    return stack[0] || 0; // Return the result or 0 if stack is empty
}

function isOperator(item) {
    return item === '+' || item === '-' || item === '*' || item === '/' || item === '%';
}

function isFunction(item) {
    return item === 'sin' || item === 'cos' || item === 'tan' || item === 'log' || item === 'exp';
}


export function toPolishNotation(expression) {
    const output = [];
    const stack = [];
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        'sin': 3,
        'cos': 3,
        'tan': 3,
        'log': 3,
        'exp': 3
    };

    for (const token of expression) {
        if (typeof token === 'number') {
            output.push(token);
        } else if (isOperator(token)) {
            if (stack.length === 0 || precedence[token] >= precedence[stack[stack.length - 1]] || stack[stack.length - 1] === '(') {
                stack.push(token);
                continue;
            }
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();
        }

        console.group('token' +token);
        console.log('stack', stack);
        console.log('output', output);
        console.groupEnd();
    }
    while (stack.length) {
        output.push(stack.pop());
    }

    return output;
}
