import { List } from "./list";

export class Queue<T = unknown> extends List<T> {
    public enqueue(element: T | T[]): void {
        this.add(element);
    }

    public dequeue(): T {
        const firstElem = this.front();
        this.remove(0);
        return firstElem;
    }

    public front(): T {
        return this.value[0];
    }

    public size(): number {
        return this.length;
    }

    public toString(): string {
        var result = "";
        for(let v of this.value) {
            result += v +" ";
        }
        return result;
    }
}
