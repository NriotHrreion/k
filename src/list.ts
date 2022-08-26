import { is, arrayIs } from "./is";
import { Iterable } from "./iterator";

export class List<T = unknown> extends Iterable<T> {
    public constructor(array: T[] | List<T> = []) {
        var value: T[];
        if(array instanceof Array) {
            value = array;
        } else {
            value = array.value;
        }

        super(value);
    }

    get length(): number {
        return this.value.length;
    }

    public add(item: T | T[]): void {
        if(item instanceof Array) {
            for(let i = 0; i < item.length; i++) {
                this.add(item[i]);
            }
        } else {
            this.value.push(item);
        }
    }

    public remove(index: number): void {
        var j = index;
        while(j < this.value.length) {
            this.value[j] = this.value[j + 1];
            j++;
        }
        this.value.pop();
    }

    public clear(): void {
        this.forEach((_value, i) => {
            this.remove(i);
        });
    }

    public has(item: T): boolean {
        for(let i = 0; i < this.length; i++) {
            if(is(this.value[i], item)) return true;
        }
        return false;
    }

    public forEach(
        cb: (value: T, index: number, arr: T[]) => void
    ): void {
        for(let i = 0; i < this.length; i++) {
            cb(this.value[i], i, this.value);
        }
    }

    public index(item: T) {
        for(let i = 0; i < this.length; i++) {
            if(is(this.value[i], item)) return i;
        }
        return -1;
    }

    public deduplicate(): void {
        for(let i = 0; i < this.length; i++) {
            var current = this.value[i];
            for(let j = 0; j < this.length; j++) {
                if(this.value[j] === current && j !== i) {
                    this.value.splice(j, 1);
                    j--;
                }
            }
        }
    }

    public equals(list: List): boolean {
        return arrayIs(this.value, list.value);
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }
}
