export function heappush(heap, newKey) {
    let index = heap.push(newKey) - 1;

    while(index >0) {
        const parentIndex = getParentIndex(index);

        const parentValue = heap[parentIndex];
        const value = heap[index];

        if (value < parentValue) {
            swap(heap, index, parentIndex)
            index = parentIndex;
        } else {
            return
        }
    }
}

export function heappop(heap) {
    // Swap the root node with last node (first item with last item in the array)
    // Remove the root node by popping the last item out of the array

    swap(heap, 0, heap.length-1);
    const result = heap.pop();

    // Compare the new root node's key with it's children:
    // If key is less than both of it's children keys then heap is stable
    // Else, swap the key with the smaller child key
    // Repeat step 3 until last child is reached or the heap property is established.

    let index = 0;
    while (getLeftChildIndex(index) <= heap.length-1) {
        const leftChildIndex = getLeftChildIndex(index)
        const rightChildIndex = getRightChildIndex(index);

        const leftChildValue = heap[leftChildIndex];
        const rightChildValue = heap[rightChildIndex];

        const value = heap[index];

        let minChildIndex = leftChildIndex;
           
        if (rightChildIndex < (heap.length)) {
            minChildIndex = (leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex);
        }

        if (value < heap[minChildIndex]) {
            break
        }

        swap(heap, index, minChildIndex);
        index = minChildIndex
    }

    return result
}

function swap(heap, index1, index2) {
    const temp = heap[index2];
    heap[index2] = heap[index1];
    heap[index1] = temp;
}

function getLeftChildIndex(index) {
    return index*2 +1
}

function getRightChildIndex(index) {
    return index *2 +2
}

function getParentIndex(index) {
    return Math.floor((index -1)/ 2)
}

// 3 13 19 23 42 

//      3
//    13  19
//  23 42


// 4 -1