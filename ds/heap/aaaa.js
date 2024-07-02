export class Heap {
    data = [];

    push(key) {
        heappush(this.data, key);
    }

    pop() {
        return heappop(this.data);
    }

    top() {
        return this.data[0];
    }
}


export function heappush(heap, newKey) {
    heap.push(newKey);
   
    let index = heap.length - 1;

    while (index >= 0) {
        const value = heap[index];
        const parentIndex = getParentIndex(index);
        const parenValue = heap[parentIndex]

        if (value < parenValue) {
            swap(heap, index, parentIndex);
            index = parentIndex
        } else {
            break;
        }
    }
}

function heappop(heap) {
    swap(heap, 0, heap.length - 1);

    const result = heap.pop();

    let index = 0;

    while (getLeftChildIndex(index) <=heap.length - 1) {
        const value = heap[index];

        const leftChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);

        const leftChildValue = heap[leftChildIndex];
        const rightChildValue = heap[rightChildIndex];

        const minChildIndex = ((rightChildIndex <= heap.length -1) && rightChildValue < leftChildValue) ? rightChildValue: leftChildIndex;

        if (value > heap[minChildIndex]) {
            swap(heap, index, minChildIndex)
            index = minChildIndex;
        } else {
            break;
        }
    }

    return result;
}

function getLeftChildIndex(index) {
    return index * 2 + 1;
}

function getRightChildIndex(index) {
    return index * 2 + 2;
}

function getParentIndex(index) {
    return Math.floor((index -1) / 2)
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
