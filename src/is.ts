export function is<T = unknown>(obj1: T, obj2: T): boolean {
    if(!(typeof obj1 === "object" && typeof obj2 === "object")) {
        return obj1 === obj2;
    }

    var isEqual = true;
    
    for(const i in obj1) {
        if(typeof obj1[i] === "object" && typeof obj2[i] === "object") {
            if(!is(obj1[i], obj2[i])) isEqual = false;
            continue;
        }

        if(obj1[i] !== obj2[i]) isEqual = false;
    }

    return isEqual;
}

export function arrayIs<T extends any[] = unknown[]>(arr1: T, arr2: T): boolean {
    if(arr1.length !== arr2.length) return false;
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1 instanceof Array && arr2 instanceof Array) {
            if(!arrayIs(arr1[i], arr2[i])) return false;
        }
        if(!is(arr1[i], arr2[i])) return false;
    }

    return true;
}
