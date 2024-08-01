import {heappop, heappush} from '../heap/heap';

export function PriorityQueue() {
    const queue = [];

    return {
        pop: () => {
            heappop(queue)
        },
        push: (priority) => {
            heappush(queue, priority);
        }
    }
}
