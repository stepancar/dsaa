export class Heap {
    data = [];

    #getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    #getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    #getRightChildIndex(index) {
        return index * 2 + 2;
    }

    #swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    getItemValue(item) {
        return item;
    }

    compare(a, b) {
        return a < b;
    }

    top() {
        return this.data[0];
    }

    pop() {
        const value = this.top();
        this.#swap(0, this.data.length - 1);
        this.data.pop();

        let currentIndex = 0;
        while (currentIndex * 2 + 1 < this.data.length) {
            const leftChildIndex = this.#getLeftChildIndex(currentIndex);
            const rightChildIndex = this.#getRightChildIndex(currentIndex);
            const leftChild = this.data[leftChildIndex];
            const rightChild = this.data[this.#getRightChildIndex(currentIndex)]
            const curr = this.data[currentIndex];

            const minChildIndex = rightChild && this.compare(
                this.getItemValue(rightChild),
                this.getItemValue(leftChild)
            ) ? rightChildIndex : leftChildIndex;
        
            if (this.compare(this.getItemValue(this.data[minChildIndex]), this.getItemValue(curr))) {
                this.#swap(currentIndex, minChildIndex);
                currentIndex = minChildIndex;
            } else {
                break;
            }
        }

        return value;
    }

    push(item) {
        const value = this.getItemValue(item);

        this.data.push(item);

        let currentIndex = this.data.length - 1;

        while(currentIndex > 0) {
            const parentIndex = this.#getParentIndex(currentIndex);
            const parentValue = this.getItemValue(this.data[parentIndex]);

            if (this.compare(value, parentValue)) {
                this.#swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
}
