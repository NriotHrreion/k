import { List } from "./list";
import ListError from "./error/ListError";

export class Stack<T = any> extends List<T> {
    public push(item: T | T[]): T | T[] {
        this.add(item);
        return item;
    }

    public pop(): T {
        if(this.isEmpty()) throw new ListError("No element in the stack to pop.");

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
