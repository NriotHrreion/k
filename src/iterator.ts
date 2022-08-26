export class Iterator<E> {
    public value: E[];
    private current: number = -1;

    public constructor(array: E[] | Iterable<E> = []) {
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
        if(!this.hasNext()) throw new Error("Iterator: No such element in the list.");

        this.current++;
        return this.value[this.current];
    }

    public remove(): void {
        var j = this.current;
        while(j < this.value.length) {
            this.value[j] = this.value[j + 1];
            j++;
        }
        this.value.pop();
    }
}

export class Iterable<T = unknown> {
    public value: T[];

    public constructor(array: T[]) {
        this.value = array;
    }

    public iterator(): Iterator<T> {
        return new Iterator(this);
    }
}
