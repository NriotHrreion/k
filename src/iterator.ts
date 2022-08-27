import IteratorError from "./error/IteratorError";

type IteratorConstructor<E> = E[] | Iterable<E>;

export class Iterator<E> {
    public value: E[];
    private current: number = -1;

    private constructor(array: IteratorConstructor<E>) {
        if(array instanceof Array) {
            this.value = array;
        } else {
            this.value = array.value;
        }
    }

    public hasNext(): boolean {
        return this.current + 1 < this.value.length;
    }

    public next(): E | never {
        if(!this.hasNext()) throw new IteratorError("No such element in the list.");

        this.current++;
        return this.value[this.current];
    }

    public remove(): void {
        if(this.current < 0 || this.current >= this.value.length) {
            throw new IteratorError("Cannot find the specified element in the list.");
        }

        var j = this.current;
        while(j < this.value.length) {
            this.value[j] = this.value[j + 1];
            j++;
        }
        this.value.pop();
    }

    public static createIterator<T>(array: IteratorConstructor<T>): Iterator<T> {
        return new Iterator(array);
    }
}

export class Iterable<T = unknown> {
    public value: T[];

    public constructor(array: T[]) {
        this.value = array;
    }

    public iterator(): Iterator<T> {
        return Iterator.createIterator<T>(this);
    }
}
