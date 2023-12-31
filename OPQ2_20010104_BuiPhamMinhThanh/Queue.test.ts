// Queue.test.ts
import { Queue } from './Queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('should enqueue and dequeue elements correctly', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBe(true);
    });

    it('should return the correct size', () => {
        expect(queue.size()).toBe(0);

        queue.enqueue(1);
        expect(queue.size()).toBe(1);

        queue.enqueue(2);
        expect(queue.size()).toBe(2);

        queue.dequeue();
        expect(queue.size()).toBe(1);

        queue.dequeue();
        expect(queue.size()).toBe(0);
    });

    it('should check if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);

        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });
});
