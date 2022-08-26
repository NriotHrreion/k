declare namespace k {
    class Valuable<T> {
        value: T
    }

    type Throwable = never;
    type It<T, C> = T[] | C;

    export function is<T = unknown>(obj1: T, obj2: T): boolean
    export function arrayIs<T extends any[] = unknown[]>(arr1: T, arr2: T): boolean

    export class Iterator<E> extends Valuable<E[]> {
        constructor(array?: It<E, Iterable<E>>)
        hasNext(): boolean
        next(): E | Throwable
        remove(): void
    }

    export class Iterable<T = unknown> extends Valuable<T[]> {
        constructor(array: T[])
        iterator(): Iterator<T>
    }

    export class List<T = any> extends Iterable<T> {
        constructor(array?: It<T, List<T>>)
        get length(): number
        add(item: T | T[]): void
        remove(index: number): void | Throwable
        clear(): void
        has(item: T): boolean
        forEach(
            cb: (value: T, index: number, arr: T[]) => void
        ): void
        index(item: T): number
        deduplicate(): void
        equals(list: List): boolean
        isEmpty(): boolean
    }

    export class Queue<T = any> extends List<T> {
        enqueue(element: T | T[]): void
        dequeue(): T | Throwable
        front(): T
        size(): number
        toString(): string
    }

    export class Stack<T = any> extends List<T> {
        push(item: T | T[]): T | T[]
        pop(): T
        peek(): T
        search(obj: T): number
    }
}

export = k;
