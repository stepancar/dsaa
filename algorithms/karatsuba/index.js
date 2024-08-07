export function multiply(num1, num2) {
    if (num1.length === 1 || num2.length === 1) {
        if (num1.length === 1) {
            const res = multiplyArrayByDigit(num2, num1[0])
            return res;
        } else {
            const res = multiplyArrayByDigit(num1, num2[0])
            return res;
        }
    }

    const n = Math.max(num1.length, num2.length);
    num1 = pad(num1, n)
    num2 = pad(num2, n)
    const n2 = Math.floor(n / 2);

    const [a, b] = split(num1);
    const [c, d] = split(num2);

    const ac = multiply(a, c);
    const bd = multiply(b, d);
    const abcd = multiply(sum(a, b), sum(c, d));
    const magic = subtractDigitArrays(subtractDigitArrays(abcd, ac), bd);
    
    const res = sum(
            sum(
                multiplyBy10NTimes(ac, 2 * n2),
                multiplyBy10NTimes(magic, n2)
            ),
            bd
        )

    return res;
}

function pad(arr, n) {
    while (arr.length < n) {
        arr.unshift(0);
    }
    return arr;
}

function split(arr) {
    const n = arr.length;

    const mid = Math.ceil(n/2)
    
    return [arr.slice(0, mid), arr.slice(mid)]
}

function sum(arr1, arr2) {
    // TODO: check why it happens
    while (arr1.length > 1 && arr1[0] === 0) {
        arr1.shift();
    }
    while (arr2.length > 1 && arr2[0] === 0) {
        arr2.shift();
    }
    let result = [];
    let carry = 0;
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) sum += arr1[i--];
        if (j >= 0) sum += arr2[j--];
        
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    // Since we've been adding digits from the end, reverse the result before returning
    return result.reverse();
}


function subtractDigitArrays(arr1, arr2) {
    let result = [];
    let borrow = 0;
    let i = arr1.length - 1;
    let j = arr2.length - 1;

    while (i >= 0) {
        let diff = arr1[i] - (j >= 0 ? arr2[j] : 0) - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result.push(diff);
        i--;
        j--;
    }

    // Remove leading zeros from the result
    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }

    // Reverse the result to get the correct order
    result.reverse();

    return result;
}

function multiplyBy10NTimes(arr, n) {
    for (let i = 0; i< n; i++) {
        arr.push(0)
    }
    return arr
}

function multiplyArrayByDigit(arr, multiplier) {
    let carry = 0;
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let product = arr[i] * multiplier + carry;
        result.unshift(product % 10);
        carry = Math.floor(product / 10);
    }

    // If there's any remaining carry, add it to the front
    while (carry > 0) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }

    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }

    return result;
}
