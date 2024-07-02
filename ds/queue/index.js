/**
 * Single linked list based implementation of queue
 */
export function Queue() {

    const head = {
        next: null,
        value: null,
    }
    let tail = head;

    function push(value) {
        tail.next = {
            next: null,
            value,
        }
        tail = tail.next
    }

    function pop() {
        if (head.next !== null) {
            const result = head.next.value;
            if (head.next === tail) {
                tail = head
            }
            head.next = head.next.next;
            return result;
        }
        return null;
    }

    return {
        push,
        pop
    }
}
