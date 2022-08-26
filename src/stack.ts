import { List } from "./list";

export class Stack<T = unknown> extends List<T> {
    public push(item: T | T[]): T | T[] {
        this.add(item);
        return item;
    }

    public pop(): T {
        var lastItem = this.peek();
        this.remove(this.length - 1);
        return lastItem;
    }

    public peek(): T {
        return this.value[this.length - 1];
    }

    public search(obj: T): number {
        return this.index(obj) !== -1 ? this.index(obj) + 1 : -1;
    }
}
