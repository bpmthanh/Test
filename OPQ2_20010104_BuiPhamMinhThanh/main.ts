import { Queue } from './Queue';

// Sử dụng hàng đợi
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Phần tử đầu tiên trong hàng đợi:", queue.dequeue()); // 1
console.log("Số lượng phần tử trong hàng đợi:", queue.size()); // 2