export function karatsuba(num1, num2) {
    if (num1.length === 1 || num2.length === 1) {
        if (num1.length === 1) {
            const res = multiplyArrayByDigit(num2, num1[0])
            console.log('result', num1, num2, res)
            return res;
        } else {

            const res = multiplyArrayByDigit(num1, num2[0])
            console.log('result', num1, num2, res)
            return res;
        }
    }

    const n = Math.max(num1.length, num2.length);
    const n2 = Math.floor(n/2);

    const [a, b] = split(num1);
    console.log('num1', num1)
    console.log(`a: ${a}, b: ${b}`)
    const [c, d] = split(num2);
    console.log('num2', num2)
    console.log(`c: ${c}, d: ${d}`)

    const ac = karatsuba(a, c);
    console.log('ac', ac)
    const bd = karatsuba(b, d);
    console.log('bd', bd);
    const abcd = karatsuba(sum(a, b), sum(c, d));
    console.log(`(a+b)(c+d) = (${a}+${b})*(${c}+${d}) = (${sum(a, b)})*(${sum(c, d)})`)
    const magic = subtractDigitArrays(subtractDigitArrays(abcd, ac), bd);
    console.log(`abcd ${abcd} - ac ${ac} - bd ${bd} = ${magic}`)

    const res = sum(
            sum(
                shiftTimes(ac, 2*n2),
                shiftTimes(magic, n2)
            ),
            bd
        )

    console.log('result', num1, num2, res)

    return res;
}

function split(arr) {
    const n = arr.length;
    
    return [arr.slice(0, Math.floor(n/2)), arr.slice(Math.floor(n/2))]
}

function sum(arr1, arr2) {
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
    // Function to check if arr1 is smaller than arr2
    function isSmaller(arr1, arr2) {
        if (arr1.length < arr2.length) return true;

        return false;
    }

    // Ensure arr1 >= arr2, otherwise swap and flag result as negative
    let negative = false;
    if (isSmaller(arr1, arr2)) {
        [arr1, arr2] = [arr2, arr1];
        negative = true;
    }

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

    // If the result is negative, add a negative sign
    if (negative) result.unshift('-');

    return result;
}

function shiftTimes(arr, n) {
    const res = [...arr]
    for (let i = 0; i< n; i++) {
        res.push(0)
    } 
    return res
}

function multiplyArrayByDigit(arr, multiplier) {
    if (!Array.isArray(arr) || arr.some(digit => digit < 0 || digit > 9) || multiplier < 0 || multiplier > 9) {
        throw new Error("Invalid input");
    }

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

    console.log('multiply', arr, multiplier, result)
    return result;
}