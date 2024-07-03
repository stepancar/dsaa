/**
 * Single linked list based implementation of queue
 */
export function Queue() {

    const head = {
        next: null,
        value: null,
    }
    let tail = head;
    let size = 0;

    function push(value) {
        tail.next = {
            next: null,
            value,
        }
        tail = tail.next
        size ++
    }

    function pop() {
        if (head.next !== null) {
            const result = head.next.value;
            if (head.next === tail) {
                tail = head
            }
            head.next = head.next.next;
            size--;
            return result;
        }
        return null;
    }

    return {
        push,
        pop,
        get size() {
            return size
        }
    }
}
