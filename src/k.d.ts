declare namespace k {
    class Valuable<T> {
        value: T
    }

    type Throwable = never;
    type It<T, C> = T[] | C;

    export function is<T = unknown>(obj1: T, obj2: T): boolean
    export function arrayIs<T extends any[] = unknown[]>(arr1: T, arr2: T): boolean

    type IteratorConstructor<E> = It<E, Iterable<E>>;

    export class Iterator<E> extends Valuable<E[]> {
        constructor(array: IteratorConstructor<E>)
        hasNext(): boolean
        next(): E | Throwable
        remove(): void
        static createIterator<T>(array: IteratorConstructor<T>): Iterator<T>
    }

    export class Iterable<T = unknown> extends Valuable<T[]> {
        constructor(array: T[])
        iterator(): Iterator<T>
    }

    export class List<T = any> extends Iterable<T> {
        constructor(array?: It<T, List<T>>)
        get length(): number
        add(item: T | T[]): void
        get(index: number): T | Throwable
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
        pop(): T | Throwable
        peek(): T
        search(obj: T): number
    }

    export class LinkedNode<T = any, TNext = any> {
        value: T
        nextNode: LinkedNode<TNext>
        constructor(value: T, nextNode?: LinkedNode<TNext>)
        static createLinkedList<T = any>(list: List<T>): LinkedNode<T, T>
        static forEachLinkedNode<T = any>(
            firstNode: LinkedNode<T, T>,
            cb: (value: T, node: LinkedNode<T>) => void
        ): void
    }
}

export = k;
