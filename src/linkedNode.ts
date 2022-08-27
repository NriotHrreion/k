import { List } from "./list";

export class LinkedNode<T = any, TNext = any> {
    public value: T;
    public nextNode: LinkedNode<TNext>

    public constructor(value: T, nextNode?: LinkedNode<TNext>) {
        this.value = value;
        this.nextNode = nextNode;
    }

    public static createLinkedList<T = any>(list: List<T>): LinkedNode<T, T> {
        var currentNode: LinkedNode = undefined;
        for(let i = list.length - 1; i >= 0; i--) {
            currentNode = new LinkedNode(list.get(i), currentNode);
        }
        return currentNode;
    }

    public static forEachLinkedNode<T = any>(
        firstNode: LinkedNode<T, T>,
        cb: (value: T, node: LinkedNode<T>) => void
    ): void {
        var node: LinkedNode = firstNode;
        while(node.nextNode) {
            cb(node.value, node);
            node = node.nextNode;
            if(!node.nextNode) {
                cb(node.value, node);
            }
        }
    }
}
